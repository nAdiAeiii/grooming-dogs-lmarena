<?php
/**
 * Plugin Name: Grooming Dogs guide enhancements (pilot)
 * Description: Long-form guide enhancements approved for a pilot on GD-04 only (owner, 2026-10-05): wider layout with fewer boxes, source previews, source back-links, section links, reading information, pilot footer. Local CSS/JS only; no storage, cookies or external requests.
 * Version: 0.1.0 (2026-10-05)
 */

defined( 'ABSPATH' ) || exit;

/** Pages that get the enhancements. Pilot: GD-04 (page 42) only. Roll-out needs explicit owner approval. */
function gd_guide_pilot_ids() {
	return [ 42 ];
}

function gd_guide_pilot_active() {
	return is_page( gd_guide_pilot_ids() );
}

add_filter(
	'body_class',
	function ( $classes ) {
		if ( gd_guide_pilot_active() ) {
			$classes[] = 'gd-guide-pilot';
		}
		return $classes;
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		if ( ! gd_guide_pilot_active() ) {
			return;
		}
		$dir = WPMU_PLUGIN_DIR . '/gd-guide/';
		$url = WPMU_PLUGIN_URL . '/gd-guide/';
		wp_enqueue_style( 'gd-guide', $url . 'gd-guide.css', [], (string) filemtime( $dir . 'gd-guide.css' ) );
		wp_enqueue_script( 'gd-guide', $url . 'gd-guide.js', [], (string) filemtime( $dir . 'gd-guide.js' ), [ 'in_footer' => true, 'strategy' => 'defer' ] );
	},
	20
);
