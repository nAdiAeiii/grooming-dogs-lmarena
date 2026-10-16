<?php
// Guide roll-out (owner-approved 2026-10-05): ideas 2/4/6/7/8 on guides GD-01 to GD-17, footer v2 site-wide.
// (1) Styling-hook classes on each guide's boxes/bands (no copy change). post_modified is restored after each save,
//     because a style-only save is not a content modification.
// (2) Footer v2 becomes the single site-wide footer (82); the pilot footer (143) is trashed and the exclusion cleared.
// Dry run: GD_DRY=1 wp --user=1 eval-file wp_guide_rollout.php
global $wpdb;
$dry = (bool) getenv( 'GD_DRY' );

$pages = get_posts( [ 'post_type' => 'page', 'post_status' => 'publish', 'meta_key' => '_gd_page_id', 'numberposts' => -1, 'fields' => 'ids' ] );
$guides = [];
foreach ( $pages as $id ) {
	$gd = get_post_meta( $id, '_gd_page_id', true );
	if ( preg_match( '/^GD-(\d\d)$/', $gd, $m ) && (int) $m[1] >= 1 && (int) $m[1] <= 17 ) {
		$guides[ $gd ] = $id;
	}
}
ksort( $guides );
if ( 17 !== count( $guides ) ) {
	WP_CLI::error( 'expected 17 guide pages, found ' . count( $guides ) );
}

$text_of = function ( $els ) use ( &$text_of ) {
	$t = '';
	foreach ( $els as $e ) {
		$t .= ' ' . ( $e['settings']['editor'] ?? '' ) . ' ' . ( $e['settings']['title'] ?? '' );
		if ( ! empty( $e['elements'] ) ) { $t .= $text_of( $e['elements'] ); }
	}
	return $t;
};
$classify = function ( $e, $depth ) use ( $text_of ) {
	if ( 'container' !== ( $e['elType'] ?? '' ) ) { return null; }
	$s  = $e['settings'] ?? [];
	$g  = $s['__globals__'] ?? [];
	$bg = $g['background_color'] ?? '';
	if ( 0 === $depth ) {
		return ( $bg || ! empty( $s['background_color'] ) ) ? 'gd-band' : null;
	}
	if ( 'globals/colors?id=gdwarn' === ( $g['border_color'] ?? '' ) ) { return 'gd-box gd-box--caution'; }
	if ( 'globals/colors?id=gdsurf' === $bg && ! empty( $s['border_border'] ) ) { return 'gd-box gd-box--card'; }
	if ( 'globals/colors?id=gdsurfs' === $bg ) {
		return false !== stripos( $text_of( $e['elements'] ?? [] ), 'Short answer' ) ? 'gd-box gd-box--short' : 'gd-box gd-box--note';
	}
	return null;
};

$total = 0;
foreach ( $guides as $gd => $id ) {
	$doc  = \Elementor\Plugin::$instance->documents->get( $id, false );
	$data = $doc->get_elements_data();
	$kinds = []; $changed = 0;
	$walk = function ( &$els, $depth ) use ( &$walk, $classify, &$kinds, &$changed ) {
		foreach ( $els as &$e ) {
			$c = $classify( $e, $depth );
			if ( $c ) {
				$kinds[] = str_replace( 'gd-box gd-box--', '', $c );
				$cur = trim( $e['settings']['css_classes'] ?? '' );
				if ( $cur !== $c ) {
					if ( $cur && false === strpos( $cur, 'gd-' ) ) { $c = $cur . ' ' . $c; } // keep any unrelated class
					$e['settings']['css_classes'] = $c;
					$changed++;
				}
			}
			if ( ! empty( $e['elements'] ) ) { $walk( $e['elements'], $depth + 1 ); }
		}
	};
	$walk( $data, 0 );
	$counts = array_count_values( $kinds );
	ksort( $counts );
	$summary = implode( ' ', array_map( function ( $k, $v ) { return "$k=$v"; }, array_keys( $counts ), $counts ) );
	if ( $changed && ! $dry ) {
		$before = $wpdb->get_row( $wpdb->prepare( "SELECT post_status, post_modified, post_modified_gmt FROM {$wpdb->posts} WHERE ID=%d", $id ) );
		$doc->save( [ 'elements' => $data ] );
		$wpdb->update( $wpdb->posts, [ 'post_modified' => $before->post_modified, 'post_modified_gmt' => $before->post_modified_gmt ], [ 'ID' => $id ] );
		clean_post_cache( $id );
		$after = $wpdb->get_row( $wpdb->prepare( "SELECT post_status, post_modified_gmt FROM {$wpdb->posts} WHERE ID=%d", $id ) );
		$summary .= " | saved; status {$before->post_status}->{$after->post_status}; modified kept {$after->post_modified_gmt}";
	}
	$total += $changed;
	WP_CLI::log( sprintf( '%s (%d) %s%s', $gd, $id, $summary ?: 'no boxes', $changed ? " [$changed to set]" : ' [already set]' ) );
}

if ( $dry ) {
	WP_CLI::success( "dry run: $total class changes pending; nothing saved" );
	return;
}

// Footer v2 site-wide
$footer = require __DIR__ . '/footer_v2.php';
update_post_meta( 82, '_elementor_data', wp_slash( wp_json_encode( $footer ) ) );
update_post_meta( 82, '_elementor_version', ELEMENTOR_VERSION );
update_post_meta( 82, 'ehf_target_include_locations', [ 'rule' => [ 'basic-global' ], 'specific' => [] ] );
update_post_meta( 82, 'ehf_target_exclude_locations', [] );
delete_post_meta( 82, '_elementor_css' );
$pilot = get_posts( [ 'post_type' => 'elementor-hf', 'post_status' => 'any', 'title' => 'Grooming Dogs Footer (guide pilot)', 'numberposts' => 1, 'fields' => 'ids' ] );
if ( $pilot ) { wp_trash_post( $pilot[0] ); }
\Elementor\Plugin::$instance->files_manager->clear_cache();
WP_CLI::success( "$total class changes saved; footer 82 = v2 site-wide; pilot footer " . ( $pilot ? $pilot[0] . ' trashed' : 'not found' ) );
