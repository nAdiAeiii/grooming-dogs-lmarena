<?php
// Restores the front page, header, footer and site icon from a backup made by wp/10-backup.php.
// Run: GD_BACKUP=<backup folder> wp eval-file wp/90-rollback.php   (defaults to the first backup, made before any install)
defined( 'ABSPATH' ) || exit;
$root = getenv( 'HOME' ) . '/backups/grooming-dogs/editorial-hybrid';
$dir  = getenv( 'GD_BACKUP' ) ?: trim( (string) @file_get_contents( "$root/original.txt" ) );
$data = $dir ? json_decode( (string) @file_get_contents( "$dir/backup.json" ), true ) : null;
if ( ! is_array( $data ) ) { WP_CLI::error( "No backup found ($dir)." ); }
foreach ( $data['posts'] as $role => $p ) {
	foreach ( $p['meta'] as $k => $v ) {
		if ( '' === $v ) { delete_post_meta( $p['id'], $k ); } else { update_post_meta( $p['id'], $k, wp_slash( $v ) ); }
	}
	clean_post_cache( $p['id'] );
	WP_CLI::log( "  restored $role ({$p['id']})" );
}
foreach ( $data['options'] as $o => $v ) {
	if ( null === $v ) { delete_option( $o ); } else { update_option( $o, $v ); }
}
if ( class_exists( '\Elementor\Plugin' ) ) { \Elementor\Plugin::$instance->files_manager->clear_cache(); }
if ( ! getenv( 'GD_BACKUP' ) || trim( (string) @file_get_contents( "$root/original.txt" ) ) === $dir ) { @unlink( "$root/original.txt" ); }
WP_CLI::success( "Restored from $dir. Imported photos stay in the media library." );
