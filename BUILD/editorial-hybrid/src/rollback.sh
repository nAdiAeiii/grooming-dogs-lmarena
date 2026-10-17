#!/usr/bin/env bash
# Puts back the site as it was before the first install (or the state in --backup=<folder>):
#   ./rollback.sh --path=/path/to/wordpress --user=<admin login> [--backup=<folder>]
set -euo pipefail
PKG="$(cd "$(dirname "$0")" && pwd)"
WP_BIN="${WP:-wp}"
ARGS=() BACKUP="" HASUSER=0
for a in "$@"; do
  case "$a" in
    --backup=*) BACKUP="${a#--backup=}" ;;
    --user=*) HASUSER=1; ARGS+=("$a") ;;
    *) ARGS+=("$a") ;;
  esac
done
[ "$HASUSER" = 1 ] || ARGS+=("--user=1")
wpc() { GD_BACKUP="$BACKUP" $WP_BIN "${ARGS[@]}" "$@"; }
[ -n "$BACKUP" ] || BACKUP="$(cat "$HOME/backups/grooming-dogs/editorial-hybrid/original.txt")"
[ -f "$BACKUP/backup.json" ] || { echo "No backup at $BACKUP"; exit 1; }

MU="$(wpc eval 'echo WPMU_PLUGIN_DIR;')"
echo "== Content and options from $BACKUP"
wpc eval-file "$PKG/wp/90-rollback.php"
echo "== mu-plugins"
rm -rf "$MU/gd-editorial" "$MU/gd-editorial.php"
[ -f "$BACKUP/mu-plugins/gd-editorial.php" ] && cp -pr "$BACKUP/mu-plugins/gd-editorial.php" "$BACKUP/mu-plugins/gd-editorial" "$MU/" || true
if [ -f "$MU/gd-home.php.off" ]; then mv "$MU/gd-home.php.off" "$MU/gd-home.php"; echo "   gd-home switched back on"; fi
wpc elementor flush-css >/dev/null 2>&1 || true
wpc cache flush >/dev/null 2>&1 || true
echo "Rolled back. Purge any page cache too."
