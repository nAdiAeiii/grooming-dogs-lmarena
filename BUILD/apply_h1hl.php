<?php
// DS-OD-06: wrap each launch page's H1 key phrase (h1-highlight.json) in <span class="gd-hl">. Wording unchanged; idempotent.
// Run: wp --user=1 eval-file apply_h1hl.php
$map = json_decode( file_get_contents( getenv( 'HOME' ) . '/backups/grooming-dogs/build/h1-highlight.json' ), true );
$ids = get_posts( [ 'post_type' => 'page', 'post_status' => 'any', 'meta_key' => '_gd_page_id', 'numberposts' => -1, 'fields' => 'ids' ] );
$walk = function ( &$els, $ph, &$n ) use ( &$walk ) {
	foreach ( $els as &$e ) {
		if ( ( $e['widgetType'] ?? '' ) === 'heading' && ( $e['settings']['header_size'] ?? '' ) === 'h1' ) {
			$t = $e['settings']['title'];
			if ( false !== strpos( $t, 'gd-hl' ) ) { $n = -1; return; }
			foreach ( [ $ph, str_replace( "'", '’', $ph ) ] as $v ) {
				if ( false !== strpos( $t, $v ) ) {
					$e['settings']['title'] = preg_replace( '/' . preg_quote( $v, '/' ) . '/u', '<span class="gd-hl">' . $v . '</span>', $t, 1 );
					$n++; return;
				}
			}
		}
		if ( ! empty( $e['elements'] ) ) { $walk( $e['elements'], $ph, $n ); if ( $n ) { return; } }
	}
};
foreach ( $ids as $id ) {
	$pid = get_post_meta( $id, '_gd_page_id', true );
	$doc = \Elementor\Plugin::$instance->documents->get( $id, false );
	$data = $doc->get_elements_data();
	$n = 0; $walk( $data, $map[ $pid ], $n );
	$status_before = get_post_status( $id );
	if ( 1 === $n ) { $doc->save( [ 'elements' => $data ] ); }
	echo "$pid ($id) ", ( 1 === $n ? 'wrapped' : ( -1 === $n ? 'already' : 'NOT FOUND' ) ), " status $status_before -> ", get_post_status( $id ), "\n";
}
