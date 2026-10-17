<?php
// Saves everything the install changes, raw, so wp/90-rollback.php can put it back exactly.
// Run: GD_PKG=<package> wp eval-file wp/10-backup.php   (prints the backup folder)
require __DIR__ . '/_lib.php';
$dir = gd_backup_root() . '/' . gmdate( 'Ymd-His' );
wp_mkdir_p( $dir ) || WP_CLI::error( "Cannot create $dir" );
$posts = [ 'front' => gd_front_id(), 'header' => gd_hf_id( 'type_header' ), 'footer' => gd_hf_id( 'type_footer' ) ];
$data  = [ 'created' => gmdate( 'c' ), 'site' => home_url(), 'posts' => [], 'options' => [] ];
foreach ( $posts as $role => $id ) {
	if ( ! $id ) { continue; }
	$data['posts'][ $role ] = [ 'id' => $id, 'meta' => [] ];
	foreach ( [ '_elementor_data', '_elementor_page_settings', '_elementor_edit_mode', '_elementor_version' ] as $k ) {
		$data['posts'][ $role ]['meta'][ $k ] = get_post_meta( $id, $k, true );
	}
}
foreach ( [ 'site_icon', 'gd_editorial_media' ] as $o ) { $data['options'][ $o ] = get_option( $o, null ); }
file_put_contents( "$dir/backup.json", wp_json_encode( $data ) ) || WP_CLI::error( 'Backup write failed' );
file_put_contents( gd_backup_root() . '/latest.txt', $dir );
// The first backup holds the site as it was before any install; rollback.sh uses it unless told otherwise.
if ( ! file_exists( gd_backup_root() . '/original.txt' ) ) { file_put_contents( gd_backup_root() . '/original.txt', $dir ); }
WP_CLI::log( $dir );
WP_CLI::success( 'Backup saved: front page, header, footer, site icon.' );
