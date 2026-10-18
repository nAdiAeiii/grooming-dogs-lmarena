<?php
// Replaces the content of the site-wide Header & Footer Builder templates; their display rules stay as they are.
// Run: GD_PKG=<package> wp eval-file wp/40-header-footer.php
require __DIR__ . '/_lib.php';
foreach ( [ 'type_header' => 'header.json', 'type_footer' => 'footer.json' ] as $type => $file ) {
	$id = gd_hf_id( $type );
	if ( ! $id ) { WP_CLI::error( "No published $type template" ); }
	gd_save( $id, gd_elements( $file ) );
	WP_CLI::log( "  $type ($id) updated" );
}
WP_CLI::success( 'Header and footer updated.' );
