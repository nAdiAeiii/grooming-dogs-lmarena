<?php
/**
 * Plugin Name: Grooming Dogs Editorial Hybrid
 * Description: Assets for the Editorial Hybrid homepage and the site header/footer (built from prototype/editorial-hybrid by BUILD/editorial-hybrid/build.py). Header and footer styles and the menu script load site-wide; the homepage styles, search and chapters load on the front page only. No external requests, cookies or storage.
 * Version: 1.0.0
 */

defined( 'ABSPATH' ) || exit;

// Body classes that scope every rule in shell.css (.gd-site) and home.css (.gd-front).
add_filter(
	'body_class',
	function ( $classes ) {
		$classes[] = 'gd-site';
		if ( is_front_page() ) {
			$classes[] = 'gd-front';
		}
		return $classes;
	}
);

// Media-library URLs for the photos, keyed like the prototype's assets/photos.json (set by wp/20-media.php).
function gd_editorial_images() {
	$out = [];
	foreach ( (array) get_option( 'gd_editorial_media', [] ) as $key => $id ) {
		$url = wp_get_attachment_image_url( (int) $id, 'full' );
		if ( $url ) {
			$out[ $key ] = $url;
		}
	}
	return $out;
}

add_action(
	'wp_head',
	function () {
		if ( is_front_page() ) {
			// Lets the hero and the footer photo run their one-time entrance; without JS everything shows at rest.
			echo "<script>document.documentElement.classList.add('js');</script>\n";
		}
	},
	1
);

add_action(
	'wp_enqueue_scripts',
	function () {
		$dir = WPMU_PLUGIN_DIR . '/gd-editorial/';
		$url = WPMU_PLUGIN_URL . '/gd-editorial/';
		$v   = function ( $f ) use ( $dir ) { return (string) filemtime( $dir . $f ); };
		$deps = wp_style_is( 'elementor-frontend', 'registered' ) ? [ 'elementor-frontend' ] : [];

		wp_enqueue_style( 'gd-shell', $url . 'shell.css', $deps, $v( 'shell.css' ) );
		$front = is_front_page();
		if ( $front ) {
			wp_enqueue_style( 'gd-front', $url . 'home.css', array_merge( $deps, [ 'gd-shell' ] ), $v( 'home.css' ) );
			wp_enqueue_script( 'gd-content', $url . 'content.js', [], $v( 'content.js' ), [ 'in_footer' => true ] );
			wp_enqueue_script( 'gd-data', $url . 'data.js', [], $v( 'data.js' ), [ 'in_footer' => true ] );
			wp_enqueue_script( 'gd-app', $url . 'app.js', [ 'gd-content', 'gd-data' ], $v( 'app.js' ), [ 'in_footer' => true ] );
			wp_add_inline_script( 'gd-app', 'window.GD_LIVE=true;window.GD_IMG=' . wp_json_encode( gd_editorial_images() ) . ';', 'before' );
		}
		// On the front page the menu script runs after the homepage script, which owns the search there.
		wp_enqueue_script( 'gd-shell', $url . 'shell.js', $front ? [ 'gd-app' ] : [], $v( 'shell.js' ), [ 'in_footer' => true ] );
	},
	20
);
