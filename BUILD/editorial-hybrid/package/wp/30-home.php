<?php
// Puts the homepage sections on the front page (GD-00) through Elementor's document API, in templates/home-order.json order.
// Set GD_LIBRARY=1 to also save each section as a template under Templates > Saved Templates.
// Run: GD_PKG=<package> wp eval-file wp/30-home.php
require __DIR__ . '/_lib.php';
require_once ABSPATH . 'wp-admin/includes/post.php';
$pkg   = gd_pkg();
$front = gd_front_id();
$els   = [];
foreach ( json_decode( file_get_contents( "$pkg/templates/home-order.json" ), true ) as $file ) {
	$els = array_merge( $els, gd_elements( $file ) );
	if ( getenv( 'GD_LIBRARY' ) ) {
		$t  = gd_template( $file );
		$id = post_exists( $t['title'], '', '', 'elementor_library' ) ?: wp_insert_post( [ 'post_type' => 'elementor_library', 'post_status' => 'publish', 'post_title' => $t['title'] ] );
		update_post_meta( $id, '_elementor_template_type', 'section' );
		wp_set_object_terms( $id, 'section', 'elementor_library_type' );
		gd_save( $id, gd_elements( $file ) );
	}
}
gd_save( $front, $els );
WP_CLI::success( count( $els ) . " sections saved to the front page ($front)." );
