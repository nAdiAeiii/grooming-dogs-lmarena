<?php
// Shared helpers for the Editorial Hybrid WP-CLI scripts. Loaded by each script; not run on its own.
defined( 'ABSPATH' ) || exit;

function gd_pkg() {
	$p = getenv( 'GD_PKG' );
	if ( ! $p || ! is_dir( "$p/templates" ) ) { WP_CLI::error( 'GD_PKG must point at the package folder (install.sh sets it).' ); }
	return rtrim( $p, '/' );
}
function gd_backup_root() { return getenv( 'HOME' ) . '/backups/grooming-dogs/editorial-hybrid'; }

function gd_front_id() {
	$id = (int) get_option( 'page_on_front' );
	if ( ! $id || 'page' !== get_option( 'show_on_front' ) ) { WP_CLI::error( 'No static front page is set.' ); }
	return $id;
}
// The Header & Footer Builder templates that currently serve the whole site.
function gd_hf_id( $type ) {
	$ids = get_posts( [ 'post_type' => 'elementor-hf', 'post_status' => 'publish', 'numberposts' => -1, 'fields' => 'ids',
		'meta_key' => 'ehf_template_type', 'meta_value' => $type, 'orderby' => 'ID', 'order' => 'ASC' ] );
	return $ids ? (int) $ids[0] : 0;
}
function gd_template( $file ) {
	$t = json_decode( file_get_contents( gd_pkg() . "/templates/$file" ), true );
	if ( ! is_array( $t ) || empty( $t['content'][0] ) ) { WP_CLI::error( "Bad template $file" ); }
	return $t;
}
// Replace {{IMG:key}} with media-library URLs (wp/20-media.php stores the key => attachment map).
function gd_resolve_images( $json ) {
	$map = (array) get_option( 'gd_editorial_media', [] );
	$json = preg_replace_callback( '/\{\{IMG:([\w-]+)\}\}/', function ( $m ) use ( $map ) {
		$url = isset( $map[ $m[1] ] ) ? wp_get_attachment_image_url( (int) $map[ $m[1] ], 'full' ) : false;
		if ( ! $url ) { WP_CLI::error( "No media for {$m[1]}; run wp/20-media.php first." ); }
		return str_replace( '/', '\/', $url );
	}, $json );
	return $json;
}
function gd_elements( $file ) {
	$t = gd_template( $file );
	return json_decode( gd_resolve_images( wp_json_encode( $t['content'] ) ), true );
}
function gd_save( $post_id, array $elements ) {
	$doc = \Elementor\Plugin::$instance->documents->get( $post_id, false );
	if ( ! $doc ) { WP_CLI::error( "Elementor cannot open post $post_id" ); }
	$doc->save( [ 'elements' => $elements ] );
}
