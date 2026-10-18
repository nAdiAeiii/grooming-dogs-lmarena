#!/usr/bin/env bash
# Installs the Editorial Hybrid homepage, header and footer with WP-CLI. Run on the server, from this folder:
#   ./install.sh --path=/path/to/wordpress --user=<admin login>            (asks before changing anything)
# Options: --yes (no prompt)  --check (preflight only)  --site-icon (also set the comb site icon)
#          --library (also save each section under Templates > Saved Templates)
# Any other option is passed to wp (for example --url=... on multisite). Set WP=... to use another wp binary.
set -euo pipefail
PKG="$(cd "$(dirname "$0")" && pwd)"
WP_BIN="${WP:-wp}"
ARGS=() YES=0 CHECK=0 ICON=0 LIB=0 HASUSER=0
for a in "$@"; do
  case "$a" in
    --yes) YES=1 ;; --check) CHECK=1 ;; --site-icon) ICON=1 ;; --library) LIB=1 ;;
    --user=*) HASUSER=1; ARGS+=("$a") ;;
    *) ARGS+=("$a") ;;
  esac
done
[ "$HASUSER" = 1 ] || ARGS+=("--user=1")
wpc() { GD_PKG="$PKG" GD_LIBRARY="$LIB" $WP_BIN "${ARGS[@]}" "$@"; }

echo "== Preflight"
wpc eval-file "$PKG/wp/00-preflight.php"
[ "$CHECK" = 1 ] && exit 0

MU="$(wpc eval 'echo WPMU_PLUGIN_DIR;')"
PHOTOS="$(grep -c '"key"' "$PKG/media/manifest.json")"
ICONTXT=""; [ "$ICON" = 1 ] && ICONTXT="the site icon and "
echo
echo "This will: back up the front page, header, footer and site icon; copy the gd-editorial mu-plugin to"
echo "  $MU; switch off the old gd-home mu-plugin (renamed, not deleted); import ${ICONTXT}${PHOTOS} photos;"
echo "  replace the front page layout and the header and footer templates."
if [ "$YES" != 1 ]; then read -r -p "Continue? [y/N] " ok; [ "$ok" = y ] || [ "$ok" = Y ] || { echo "Stopped; nothing changed."; exit 1; }; fi

echo "== Backup"
BACKUP="$(wpc eval-file "$PKG/wp/10-backup.php" | head -1)"
mkdir -p "$BACKUP/mu-plugins"
[ -f "$MU/gd-home.php" ] && cp -p "$MU/gd-home.php" "$BACKUP/mu-plugins/" || true
[ -f "$MU/gd-editorial.php" ] && cp -pr "$MU/gd-editorial.php" "$MU/gd-editorial" "$BACKUP/mu-plugins/" || true
echo "   $BACKUP"

echo "== mu-plugin"
mkdir -p "$MU"
rm -rf "$MU/gd-editorial"
cp -r "$PKG/mu-plugins/gd-editorial" "$PKG/mu-plugins/gd-editorial.php" "$MU/"
if [ -f "$MU/gd-home.php" ]; then mv "$MU/gd-home.php" "$MU/gd-home.php.off"; echo "   old gd-home switched off (gd-home.php.off)"; fi

echo "== Photos";            wpc eval-file "$PKG/wp/20-media.php"
echo "== Front page";        wpc eval-file "$PKG/wp/30-home.php"
echo "== Header and footer"; wpc eval-file "$PKG/wp/40-header-footer.php"
if [ "$ICON" = 1 ]; then echo "== Site icon"; wpc eval-file "$PKG/wp/50-site-icon.php"; fi

echo "== Caches"
wpc elementor flush-css >/dev/null 2>&1 || true
wpc cache flush >/dev/null 2>&1 || true
echo
echo "Done. Backup: $BACKUP"
echo "Undo (back to the site before the first install): ./rollback.sh ${ARGS[*]}"
echo "If the site uses a page cache (LiteSpeed, WP Rocket, Cloudflare), purge it too."
