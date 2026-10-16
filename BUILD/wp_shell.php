<?php
/**
 * Shared shell (DS-OD-03): HFE header + footer templates. Since deployment (2026-10-05) they target the Entire Website.
 * Run: wp --user=1 eval-file wp_shell.php
 */
function gd_id() { return substr( md5( uniqid( '', true ) ), 0, 7 ); }
function gd_dims( $t, $r, $b, $l ) { return [ 'unit' => 'px', 'top' => "$t", 'right' => "$r", 'bottom' => "$b", 'left' => "$l", 'isLinked' => false ]; }

$pages = get_posts( [ 'post_type' => 'page', 'post_status' => 'any', 'meta_key' => '_gd_page_id', 'numberposts' => -1, 'fields' => 'ids' ] );
$specific = array_map( function( $id ) { return 'post-' . $id; }, $pages );
$menu = wp_get_nav_menu_object( 'Primary' );

$header = [ [
	'id' => gd_id(), 'elType' => 'container', 'isInner' => false,
	'settings' => [
		'css_classes' => 'gd-header', 'content_width' => 'boxed', 'boxed_width' => [ 'unit' => 'px', 'size' => 1200 ],
		'flex_direction' => 'row', 'flex_direction_mobile' => 'row', 'flex_wrap' => 'nowrap', 'flex_wrap_mobile' => 'nowrap', 'justify_content' => 'space-between', 'align_items' => 'center',
		'padding' => gd_dims( 16, 24, 16, 24 ), 'padding_mobile' => gd_dims( 12, 16, 12, 16 ),
		// DS-OD-06 (owner, 2026-10-05): dark espresso header; the honey line underneath comes from site.css
		'background_background' => 'classic', 'background_color' => '#3A2318',
		'__globals__' => [ 'background_color' => 'globals/colors?id=primary' ],
	],
	'elements' => [
		[ 'id' => gd_id(), 'elType' => 'widget', 'widgetType' => 'hfe-site-title', 'elements' => [],
		  'settings' => [ 'heading_tag' => 'p', 'size' => 'default', 'custom_link' => 'default', '_css_classes' => 'gd-wordmark', '_flex_size' => 'none' ] ],
		[ 'id' => gd_id(), 'elType' => 'widget', 'widgetType' => 'navigation-menu', 'elements' => [],
		  'settings' => [ 'menu' => (string) $menu->term_id, 'layout' => 'horizontal', 'navmenu_align' => 'right', 'dropdown' => 'tablet',
		                  'submenu_icon' => 'arrow', 'pointer' => 'none', 'link_redirect' => 'child', 'full_width_dropdown' => 'yes',
		                  'hamburger_align' => 'right', 'hamburger_align_mobile' => 'right', 'hamburger_align_tablet' => 'right', '_css_classes' => 'gd-nav', '_flex_size' => 'grow' ] ],
	],
] ];

// Footer v2 (owner-approved 2026-10-05): one site-wide footer, shared with wp_guide_rollout.php.
$footer = require __DIR__ . '/footer_v2.php';

$out = [];
foreach ( [ 'type_header' => [ 'Grooming Dogs Header', $header ], 'type_footer' => [ 'Grooming Dogs Footer', $footer ] ] as $type => $def ) {
	$existing = get_posts( [ 'post_type' => 'elementor-hf', 'post_status' => 'any', 'meta_key' => 'ehf_template_type', 'meta_value' => $type, 'numberposts' => 1, 'fields' => 'ids' ] );
	$id = $existing ? $existing[0] : wp_insert_post( [ 'post_type' => 'elementor-hf', 'post_status' => 'publish', 'post_title' => $def[0] ] );
	wp_update_post( [ 'ID' => $id, 'post_status' => 'publish', 'post_title' => $def[0] ] );
	update_post_meta( $id, 'ehf_template_type', $type );
	update_post_meta( $id, 'ehf_target_include_locations', [ 'rule' => [ 'basic-global' ], 'specific' => [] ] ); // deployed 2026-10-05: Entire Website
	if ( ! get_post_meta( $id, 'ehf_target_exclude_locations', true ) ) { // keep pilot exclusions set by wp_guide_pilot.php
		update_post_meta( $id, 'ehf_target_exclude_locations', [] );
	}
	update_post_meta( $id, 'ehf_target_user_roles', [ 'all' ] );
	update_post_meta( $id, '_elementor_edit_mode', 'builder' );
	update_post_meta( $id, '_elementor_template_type', 'wp-post' );
	update_post_meta( $id, '_elementor_version', ELEMENTOR_VERSION );
	update_post_meta( $id, '_elementor_data', wp_slash( wp_json_encode( $def[1] ) ) );
	delete_post_meta( $id, '_elementor_css' );
	$out[] = "$type id=$id targets=" . count( $specific );
}
update_option( 'blogname', 'Grooming Dogs' );
echo implode( "\n", $out ), "\nblogname=", get_option( 'blogname' ), "\n";
