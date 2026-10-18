<?php
// Checks only, no writes. Run: GD_PKG=<package> wp eval-file wp/00-preflight.php
require __DIR__ . '/_lib.php';
$ok = true;
$say = function ( $good, $msg ) use ( &$ok ) { $ok = $ok && $good; WP_CLI::log( ( $good ? '  ok   ' : '  FAIL ' ) . $msg ); };
$pkg = gd_pkg();
$say( defined( 'ELEMENTOR_VERSION' ), 'Elementor active' . ( defined( 'ELEMENTOR_VERSION' ) ? ' (' . ELEMENTOR_VERSION . ')' : '' ) );
$say( post_type_exists( 'elementor-hf' ), 'Elementor Header & Footer Builder active' );
$front = (int) get_option( 'page_on_front' );
$say( $front && 'page' === get_option( 'show_on_front' ), "static front page set (ID $front)" );
$pid = get_post_meta( $front, '_gd_page_id', true );
$say( 'GD-00' === $pid || '' === $pid, 'front page is GD-00' . ( $pid ? " ($pid)" : ' (no _gd_page_id; continuing)' ) );
$say( (bool) gd_hf_id( 'type_header' ), 'header template found (ID ' . gd_hf_id( 'type_header' ) . ')' );
$say( (bool) gd_hf_id( 'type_footer' ), 'footer template found (ID ' . gd_hf_id( 'type_footer' ) . ')' );
$order = json_decode( file_get_contents( "$pkg/templates/home-order.json" ), true );
$say( is_array( $order ) && count( $order ) > 5, count( (array) $order ) . ' homepage sections in the package' );
foreach ( array_merge( (array) $order, [ 'header.json', 'footer.json' ] ) as $f ) { gd_template( $f ); }
$say( is_writable( WPMU_PLUGIN_DIR ) || ! file_exists( WPMU_PLUGIN_DIR ), 'mu-plugins folder writable (' . WPMU_PLUGIN_DIR . ')' );
$say( current_user_can( 'edit_pages' ), 'running as a user who can edit pages (pass --user=<admin>)' );
$say( current_user_can( 'unfiltered_html' ), 'that user may save unfiltered HTML (needed for the inline SVG icons)' );
if ( ! $ok ) { WP_CLI::error( 'Preflight failed; nothing was changed.' ); }
WP_CLI::success( 'Preflight passed.' );
