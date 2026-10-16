<?php
/**
 * Architecture §F.2 redirect register, created INACTIVE (activated at deployment).
 * Run: wp --user=1 eval-file wp_redirects.php
 */
$mods = get_option( 'rank_math_modules', [] );
if ( ! in_array( 'redirections', $mods, true ) ) {
	$mods[] = 'redirections';
	update_option( 'rank_math_modules', $mods );
}
\RankMath\Installer::create_tables( [ 'redirections' ] );

$rules = [
	// source, destination, code   (architecture §F.2)
	[ 'home-b', '/', 301 ],
	[ 'team', '/about/', 301 ],
	[ 'services', '/choosing-a-dog-groomer/', 301 ],
	[ 'services-detail', '/choosing-a-dog-groomer/', 301 ],
	[ 'pricing', '/dog-grooming-cost/', 301 ],          // PC-04: 301 only together with GD-16 publication (410 until then)
	[ 'faq', '', 410 ],
	[ 'blog', '/how-to-groom-your-dog-at-home/', 301 ],
	[ '404-2', '', 410 ],
	[ 'top-dog-grooming-tips-for-a-happy-healthy-pup', '/how-to-groom-your-dog-at-home/', 301 ],
	[ 'dog-grooming-at-home-a-guide-to-keeping-your-pup-looking-and-feeling-great', '/how-to-groom-your-dog-at-home/', 301 ],
	[ 'locations.kml', '', 410 ],
];
global $wpdb;
$t = $wpdb->prefix . 'rank_math_redirections';
foreach ( $rules as $r ) {
	list( $src, $dest, $code ) = $r;
	$sources = maybe_serialize( [ [ 'pattern' => $src, 'comparison' => 'exact', 'ignore' => '' ] ] );
	$exists = $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $t WHERE sources = %s", $sources ) );
	$row = [
		'sources'     => $sources,
		'url_to'      => $dest ? home_url( $dest ) : '',
		'header_code' => $code,
		'hits'        => 0,
		'status'      => 'inactive',
		'created'     => current_time( 'mysql' ),
		'updated'     => current_time( 'mysql' ),
	];
	if ( $exists ) {
		$wpdb->update( $t, $row, [ 'id' => $exists ] );
	} else {
		$wpdb->insert( $t, $row );
	}
}
foreach ( $wpdb->get_results( "SELECT id, sources, url_to, header_code, status FROM $t ORDER BY id" ) as $x ) {
	$s = maybe_unserialize( $x->sources );
	printf( "%d /%s/ -> %s [%d] %s\n", $x->id, $s[0]['pattern'], $x->url_to ?: '(gone)', $x->header_code, $x->status );
}
