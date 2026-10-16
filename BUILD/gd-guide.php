<?php
/**
 * Plugin Name: Grooming Dogs guide enhancements
 * Description: Long-form guide enhancements (owner-approved ideas 2, 4, 6, 7, 8; GD-04 pilot 2026-10-05, rolled out to the guide pages GD-01 to GD-17): wider layout with fewer boxes, source previews and back-links, section links, reading information. Local CSS/JS only; no storage, cookies or external requests. The footer (idea 9) is site-wide and styled in Additional CSS.
 * Version: 1.0.0 (2026-10-05)
 */

defined( 'ABSPATH' ) || exit;

/** Guide pages = launch pages GD-01 to GD-17 (by their _gd_page_id). GD-00 and GD-18 to GD-21 are not guides. */
function gd_guide_is_guide_page() {
	if ( ! is_page() ) {
		return false;
	}
	$gd = get_post_meta( get_queried_object_id(), '_gd_page_id', true );
	if ( ! preg_match( '/^GD-(\d\d)$/', (string) $gd, $m ) ) {
		return false;
	}
	$n = (int) $m[1];
	return $n >= 1 && $n <= 17;
}

add_filter(
	'body_class',
	function ( $classes ) {
		if ( gd_guide_is_guide_page() ) {
			$classes[] = 'gd-guide';
		}
		return $classes;
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		if ( ! gd_guide_is_guide_page() ) {
			return;
		}
		$dir = WPMU_PLUGIN_DIR . '/gd-guide/';
		$url = WPMU_PLUGIN_URL . '/gd-guide/';
		wp_enqueue_style( 'gd-guide', $url . 'gd-guide.css', [], (string) filemtime( $dir . 'gd-guide.css' ) );
		wp_enqueue_script( 'gd-guide', $url . 'gd-guide.js', [], (string) filemtime( $dir . 'gd-guide.js' ), [ 'in_footer' => true, 'strategy' => 'defer' ] );
	},
	20
);
