<?php
/**
 * Create/update the 22 launch pages as DRAFTS from build/out/*.json + manifest.json.
 * Run: wp --user=1 eval-file wp_build.php <dir>
 * Idempotent: matches existing pages by meta _gd_page_id.
 */
$dir = $args[0];
$manifest = json_decode( file_get_contents( "$dir/manifest.json" ), true );
$updated  = 'October 5, 2026'; // replaced with the real publication date at deployment
$results  = [];
foreach ( $manifest as $m ) {
	$pid  = $m['pid'];
	$json = file_get_contents( "$dir/{$pid}.json" );
	$json = str_replace( [ '{{UPDATED}}', '{{FORM_SHORTCODE}}' ], [ $updated, '[wpforms id=\"88\" title=\"false\"]' ], $json );
	// find existing
	$existing = get_posts( [ 'post_type' => 'page', 'post_status' => 'any', 'meta_key' => '_gd_page_id', 'meta_value' => $pid, 'numberposts' => 1, 'fields' => 'ids' ] );
	if ( $existing ) {
		$id = $existing[0];
	} elseif ( 'GD-21' === $pid ) {
		$id = (int) get_option( 'wp_page_for_privacy_policy' ); // reuse WP privacy page (ID 3)
	} else {
		$id = 0;
	}
	$postarr = [
		'post_type'      => 'page',
		'post_status'    => 'draft',
		'post_title'     => $m['wp_title'],
		'post_name'      => $m['slug'] !== '' ? $m['slug'] : 'home',
		'post_content'   => '',
		'comment_status' => 'closed',
		'ping_status'    => 'closed',
		'post_parent'    => 0,
	];
	if ( $id ) {
		$postarr['ID'] = $id;
		$id = wp_update_post( $postarr, true );
	} else {
		$id = wp_insert_post( $postarr, true );
	}
	if ( is_wp_error( $id ) ) { $results[] = "$pid ERROR " . $id->get_error_message(); continue; }
	update_post_meta( $id, '_gd_page_id', $pid );
	update_post_meta( $id, '_wp_page_template', 'elementor_header_footer' );
	update_post_meta( $id, '_elementor_edit_mode', 'builder' );
	update_post_meta( $id, '_elementor_template_type', 'wp-page' );
	update_post_meta( $id, '_elementor_version', ELEMENTOR_VERSION );
	update_post_meta( $id, '_elementor_data', wp_slash( $json ) );
	delete_post_meta( $id, '_elementor_css' );
	update_post_meta( $id, 'rank_math_title', $m['seo_title'] );
	update_post_meta( $id, 'rank_math_description', $m['meta'] );
	if ( ! empty( $m['focus'] ) ) update_post_meta( $id, 'rank_math_focus_keyword', $m['focus'] );
	if ( ! empty( $m['breadcrumb'] ) ) update_post_meta( $id, 'rank_math_breadcrumb_title', $m['breadcrumb'] );
	$results[] = sprintf( '%s id=%d slug=%s status=%s', $pid, $id, get_post_field( 'post_name', $id ), get_post_status( $id ) );
}
echo implode( "\n", $results ), "\n";
