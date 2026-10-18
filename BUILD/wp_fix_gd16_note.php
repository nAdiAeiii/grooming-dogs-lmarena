<?php
// Owner-approved copy fix (2026-10-06): GD-16's price-sources label carried a builder note.
// "(all accessed October 5, 2026; links are rel="nofollow", citations only)" -> "(all accessed October 5, 2026; citations only)".
// The links keep rel="nofollow" in the markup; only the visible note is removed. This is a real copy change, so post_modified updates.
// Run: wp --user=1 eval-file wp_fix_gd16_note.php
$id   = (int) get_posts( [ 'post_type' => 'page', 'meta_key' => '_gd_page_id', 'meta_value' => 'GD-16', 'fields' => 'ids', 'numberposts' => 1 ] )[0];
$doc  = \Elementor\Plugin::$instance->documents->get( $id, false );
$data = $doc->get_elements_data();
$old  = '; links are rel="nofollow", citations only)';
$new  = '; citations only)';
$hits = 0;
$walk = function ( &$els ) use ( &$walk, $old, $new, &$hits ) {
	foreach ( $els as &$e ) {
		if ( isset( $e['settings']['editor'] ) && false !== strpos( $e['settings']['editor'], $old ) ) {
			$e['settings']['editor'] = str_replace( $old, $new, $e['settings']['editor'] );
			$hits++;
		}
		if ( ! empty( $e['elements'] ) ) { $walk( $e['elements'] ); }
	}
};
$walk( $data );
if ( 1 !== $hits ) { WP_CLI::error( "expected exactly 1 occurrence, found $hits" ); }
$doc->save( [ 'elements' => $data ] );
WP_CLI::success( "GD-16 ($id) note removed; status " . get_post_status( $id ) . '; modified ' . get_post_field( 'post_modified_gmt', $id ) );
