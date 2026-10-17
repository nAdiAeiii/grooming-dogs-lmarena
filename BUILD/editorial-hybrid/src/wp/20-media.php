<?php
// Imports the photos into the media library once (re-runs reuse them) and stores key => attachment ID.
// Run: GD_PKG=<package> wp eval-file wp/20-media.php
require __DIR__ . '/_lib.php';
require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/image.php';
$pkg = gd_pkg();
$map = (array) get_option( 'gd_editorial_media', [] );
foreach ( json_decode( file_get_contents( "$pkg/media/manifest.json" ), true ) as $m ) {
	$found = get_posts( [ 'post_type' => 'attachment', 'post_status' => 'inherit', 'numberposts' => 1, 'fields' => 'ids', 'meta_key' => '_gd_media_key', 'meta_value' => $m['key'] ] );
	if ( $found ) { $map[ $m['key'] ] = (int) $found[0]; WP_CLI::log( "  have   {$m['key']} ({$found[0]})" ); continue; }
	$tmp = wp_tempnam( $m['file'] );
	copy( "$pkg/media/{$m['file']}", $tmp );
	$id = media_handle_sideload( [ 'name' => $m['file'], 'tmp_name' => $tmp ], 0, null, [ 'post_excerpt' => 'Photo: ' . $m['credit'] . ' / Pexels' ] );
	if ( is_wp_error( $id ) ) { @unlink( $tmp ); WP_CLI::error( $m['file'] . ': ' . $id->get_error_message() ); }
	update_post_meta( $id, '_wp_attachment_image_alt', $m['alt'] );
	update_post_meta( $id, '_gd_media_key', $m['key'] );
	update_post_meta( $id, '_gd_media_source', $m['source'] . ' (' . $m['license'] . ')' );
	$map[ $m['key'] ] = (int) $id;
	WP_CLI::log( "  added  {$m['key']} ($id)" );
}
update_option( 'gd_editorial_media', $map, false );
WP_CLI::success( count( $map ) . ' photos ready.' );
