<?php
/**
 * Plugin Name: Grooming Dogs site rules
 * Description: Implements locked production rules that plugins expose only as filters. (1) GD-20/GD-21: no form analytics (data minimization). (2) Architecture §H: Article author = Organization "Grooming Dogs"; no Person schema (no real named people supplied). (3) GD-18 AboutPage, GD-20 ContactPage schema types. (4) Owner-approved a11y fix: one keyboard stop per dropdown parent in the header menu. (5) Keep Rank Math's global entities (Organization, WebSite, WebPage) on launch pages whose Article schema is off (GD-00, GD-18 to 21).
 * Version: 1.3.0 (2026-10-05)
 */

defined( 'ABSPATH' ) || exit;

// (1) WPForms 2.x form analytics off: GD-21 states the site uses no analytics.
add_filter( 'wpforms_analytics_is_enabled', '__return_false' );

// (2) + (3) Rank Math JSON-LD graph adjustments for launch pages.
add_filter(
	'rank_math/json_ld',
	function ( $data ) {
		if ( ! is_array( $data ) ) {
			return $data;
		}
		$org    = [ '@id' => home_url( '/#organization' ) ];
		$gd_id  = is_singular( 'page' ) ? get_post_meta( get_queried_object_id(), '_gd_page_id', true ) : '';
		foreach ( $data as $key => $node ) {
			if ( ! is_array( $node ) || ! isset( $node['@type'] ) ) {
				continue;
			}
			$types = (array) $node['@type'];
			if ( in_array( 'Person', $types, true ) ) {
				unset( $data[ $key ] );
				continue;
			}
			if ( isset( $node['author'] ) ) {
				$data[ $key ]['author'] = $org;
			}
			if ( in_array( 'WebPage', $types, true ) ) {
				if ( 'GD-18' === $gd_id ) {
					$data[ $key ]['@type'] = 'AboutPage';
				} elseif ( 'GD-20' === $gd_id ) {
					$data[ $key ]['@type'] = 'ContactPage';
				}
			}
		}
		return $data;
	},
	99
);

// (4) Header menu (HFE walker): each dropdown parent is a div[role=button] wrapping an <a href="#"> with the
// same name, giving two tab stops for one control. Remove only the inner duplicate link from the tab order;
// the div[role=button] stays the single focus stop. No visual change, no JavaScript.
add_filter(
	'walker_nav_menu_start_el',
	function ( $item_output, $item, $depth, $args ) {
		if ( 0 === (int) $depth && ! empty( $args->has_children ) && '#' === trim( (string) $item->url )
			&& false !== strpos( $item_output, 'hfe-has-submenu-container' ) ) {
			$item_output = preg_replace( '/<a(\s[^>]*href="#")/', '<a tabindex="-1"$1', $item_output, 1 );
		}
		return $item_output;
	},
	10,
	4
);

// (5) Rank Math 1.0.279 drops its global entities (Organization, WebSite, WebPage) on a page whose rich snippet is "off".
// Launch pages without Article (GD-00, GD-18 to 21) still need them, and GD-18/GD-20 need the WebPage node for AboutPage/ContactPage.
add_filter(
	'rank_math/schema/add_global_entities',
	function ( $add ) {
		if ( ! $add && is_singular( 'page' ) && get_post_meta( get_queried_object_id(), '_gd_page_id', true ) ) {
			return true;
		}
		return $add;
	}
);

// (6) Skip link target (owner-approved a11y fix, 2026-10-05). Header Footer Elementor prints
// <a class="hfe-skip-link" href="#content">, but Elementor full-width pages have no #content, so the link went nowhere.
// Wrap the page's own content (not header/footer templates) in a <main id="content"> landmark. No JavaScript;
// tabindex="-1" lets the browser move focus into the content when the skip link is followed.
add_filter(
	'the_content',
	function ( $content ) {
		if ( is_singular( 'page' ) && in_the_loop() && is_main_query() && get_the_ID() === get_queried_object_id()
			&& false === strpos( $content, 'id="content"' ) ) {
			return '<main id="content" class="gd-main" tabindex="-1">' . $content . '</main>';
		}
		return $content;
	},
	PHP_INT_MAX
);
