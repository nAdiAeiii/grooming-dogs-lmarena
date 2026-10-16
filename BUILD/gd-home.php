<?php
/**
 * Plugin Name: Grooming Dogs home page
 * Description: Home page redesign assets (owner-approved 2026-10-06): numbered "Start here" path, icon cards and tiles, and the React Bits CircularCarousel in "Grooming for your dog's situation". Front page only. React comes from WordPress core (handles "react", "react-dom"); no external requests, storage or cookies.
 * Version: 1.0.0 (2026-10-06)
 */

defined( 'ABSPATH' ) || exit;

add_action(
	'wp_enqueue_scripts',
	function () {
		if ( ! is_front_page() ) {
			return;
		}
		$dir = WPMU_PLUGIN_DIR . '/gd-home/';
		$url = WPMU_PLUGIN_URL . '/gd-home/';
		$v   = function ( $f ) use ( $dir ) { return (string) filemtime( $dir . $f ); };
		wp_enqueue_style( 'gd-home', $url . 'gd-home.css', [], $v( 'gd-home.css' ) );
		wp_enqueue_script( 'gd-home', $url . 'gd-home.js', [], $v( 'gd-home.js' ), [ 'in_footer' => true, 'strategy' => 'defer' ] );
		wp_enqueue_style( 'gd-carousel', $url . 'gd-carousel.css', [], $v( 'gd-carousel.css' ) );
		wp_enqueue_script( 'gd-carousel', $url . 'gd-carousel.js', [ 'react', 'react-dom' ], $v( 'gd-carousel.js' ), [ 'in_footer' => true ] );
	},
	20
);
