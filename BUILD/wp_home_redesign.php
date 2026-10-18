<?php
// Home redesign + menu change (owner-approved 2026-10-06).
// (1) GD-00 (front page) gets the new layout from out/GD-00.json via the Elementor document API (status untouched; this is a
//     real content/layout change, so post_modified updates). (2) "Start here" and its three children leave menu "Primary".
// Run: GD_PROBLEMS_ID=<attachment id> wp --user=1 eval-file wp_home_redesign.php
$dir     = getenv( 'HOME' ) . '/backups/grooming-dogs/build';
$front   = (int) get_option( 'page_on_front' );
$problem = (int) getenv( 'GD_PROBLEMS_ID' );
if ( 'GD-00' !== get_post_meta( $front, '_gd_page_id', true ) || ! $problem ) {
	WP_CLI::error( 'front page is not GD-00, or GD_PROBLEMS_ID missing' );
}
$json = file_get_contents( "$dir/GD-00.json" );
foreach ( [ 33, 34, 35 ] as $att ) {
	$url = wp_get_attachment_image_url( $att, 'large' );
	if ( ! $url ) { WP_CLI::error( "attachment $att missing" ); }
	$json = str_replace( '{{IMG:' . $att . '}}', $url, $json );
}
$json = str_replace( '{{IMG:PROBLEMS}}', wp_get_attachment_image_url( $problem, 'large' ) ?: wp_get_attachment_url( $problem ), $json );
if ( false !== strpos( $json, '{{IMG:' ) ) { WP_CLI::error( 'unresolved image placeholder' ); }
$data = json_decode( $json, true );
if ( ! is_array( $data ) || 6 !== count( $data ) ) { WP_CLI::error( 'bad GD-00.json' ); }
$doc    = \Elementor\Plugin::$instance->documents->get( $front, false );
$status = get_post_status( $front );
$doc->save( [ 'elements' => $data ] );
WP_CLI::log( "GD-00 ($front) saved; status $status -> " . get_post_status( $front ) );

// Menu: remove "Start here" (a "#" parent) and its three children; the pages themselves are untouched.
$menu    = wp_get_nav_menu_object( 'Primary' );
$items   = wp_get_nav_menu_items( $menu->term_id );
$parent  = null;
foreach ( $items as $it ) { if ( 'Start here' === $it->title && 0 === (int) $it->menu_item_parent ) { $parent = $it; } }
$removed = [];
if ( $parent ) {
	foreach ( $items as $it ) {
		if ( (int) $it->menu_item_parent === (int) $parent->ID ) { wp_delete_post( $it->ID, true ); $removed[] = $it->title; }
	}
	wp_delete_post( $parent->ID, true );
	$removed[] = 'Start here';
}
\Elementor\Plugin::$instance->files_manager->clear_cache();
$left = array_map( function ( $i ) { return ( $i->menu_item_parent ? '  - ' : '' ) . $i->title; }, wp_get_nav_menu_items( $menu->term_id ) );
WP_CLI::success( 'menu items removed: ' . ( $removed ? implode( ', ', $removed ) : 'none (already removed)' ) . "\nmenu now:\n" . implode( "\n", $left ) );
