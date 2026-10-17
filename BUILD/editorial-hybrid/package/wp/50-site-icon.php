<?php
// Optional: sets the comb mark as the site icon (favicon and app icons). WordPress makes the smaller sizes.
// Run: GD_PKG=<package> wp eval-file wp/50-site-icon.php
require __DIR__ . '/_lib.php';
require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/image.php';
$found = get_posts( [ 'post_type' => 'attachment', 'post_status' => 'inherit', 'numberposts' => 1, 'fields' => 'ids', 'meta_key' => '_gd_media_key', 'meta_value' => 'site-icon' ] );
$id    = $found ? (int) $found[0] : 0;
if ( ! $id ) {
	$tmp = wp_tempnam( 'site-icon-512.png' );
	copy( gd_pkg() . '/media/site-icon-512.png', $tmp );
	$id = media_handle_sideload( [ 'name' => 'grooming-dogs-icon.png', 'tmp_name' => $tmp ], 0, 'Grooming Dogs site icon' );
	if ( is_wp_error( $id ) ) { WP_CLI::error( $id->get_error_message() ); }
	update_post_meta( $id, '_gd_media_key', 'site-icon' );
}
update_option( 'site_icon', $id );
WP_CLI::success( "Site icon set (attachment $id)." );
