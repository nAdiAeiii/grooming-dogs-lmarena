<?php
// Guide pilot (GD-04 only, owner-approved 2026-10-05):
// (1) styling-hook classes on GD-04's boxes/band (no copy change);
// (2) pilot footer for GD-04 only; the site footer (82) excludes GD-04.
// Run: wp --user=1 eval-file wp_guide_pilot.php
$page    = 42;
$classes = [
	'b95fcb2' => 'gd-box gd-box--short',
	'afcdca0' => 'gd-box gd-box--note',
	'dca3f96' => 'gd-box gd-box--caution',
	'6583c3c' => 'gd-box gd-box--caution',
	'7c6d5b3' => 'gd-box gd-box--caution',
	'bebfb32' => 'gd-band',
];
$doc  = \Elementor\Plugin::$instance->documents->get( $page, false );
$data = $doc->get_elements_data();
$hit  = 0;
$walk = function ( &$els ) use ( &$walk, $classes, &$hit ) {
	foreach ( $els as &$e ) {
		if ( isset( $classes[ $e['id'] ] ) ) {
			$e['settings']['css_classes'] = $classes[ $e['id'] ];
			$hit++;
		}
		if ( ! empty( $e['elements'] ) ) {
			$walk( $e['elements'] );
		}
	}
};
$walk( $data );
if ( 6 !== $hit ) {
	WP_CLI::error( "expected 6 elements, found $hit" );
}
$before = get_post_status( $page );
$doc->save( [ 'elements' => $data ] );
WP_CLI::log( "GD-04 classes set on $hit elements; status $before -> " . get_post_status( $page ) );

// ---- Pilot footer ----
$id7  = function () { return substr( md5( uniqid( '', true ) ), 0, 7 ); };
$dims = function ( $t, $r, $b, $l ) { return [ 'unit' => 'px', 'top' => "$t", 'right' => "$r", 'bottom' => "$b", 'left' => "$l", 'isLinked' => false ]; };
$li   = function ( $items ) {
	return implode( '', array_map( function ( $i ) { return '<li><a href="' . $i[1] . '">' . $i[0] . '</a></li>'; }, $items ) );
};
// Site description: the existing home-page copy (GD-00), verbatim.
$grid = '<div class="gd-fgrid">'
	. '<div class="gd-fbrand"><a class="gd-fmark" href="/">Grooming Dogs</a>'
	. '<p>Clear, step-by-step guides to grooming your dog at home: brushing, bathing, nails, ears, teeth and trims. They also help you know when a groomer or your vet should take over.</p>'
	. '<p class="gd-fsmall">We\'re a guide, not a grooming salon, and we don\'t give veterinary advice.</p></div>'
	. '<nav aria-label="Grooming guides"><p class="gd-flabel">Grooming guides</p><ul class="gd-ftwo">' . $li( [
		[ 'Full routine', '/how-to-groom-your-dog-at-home/' ], [ 'Schedule', '/how-often-should-you-groom-your-dog/' ],
		[ 'Coat types', '/dog-coat-types/' ], [ 'Bathing', '/bathing-your-dog/' ], [ 'Brushing', '/brushing-your-dog/' ],
		[ 'Haircuts &amp; trimming', '/dog-haircuts-and-trimming/' ], [ 'Nails', '/trimming-dog-nails/' ],
		[ 'Ears', '/cleaning-dog-ears/' ], [ 'Teeth', '/brushing-dog-teeth/' ],
	] ) . '</ul></nav>'
	. '<nav aria-label="Help and tools"><p class="gd-flabel">Help &amp; tools</p><ul>' . $li( [
		[ 'Problems', '/dog-grooming-problems/' ], [ 'Tools', '/dog-grooming-tools/' ], [ 'Choosing a groomer', '/choosing-a-dog-groomer/' ],
		[ 'Grooming cost', '/dog-grooming-cost/' ], [ 'Glossary', '/dog-grooming-glossary/' ],
	] ) . '</ul></nav>'
	. '<nav aria-label="About the site"><p class="gd-flabel">About the site</p><ul>' . $li( [
		[ 'About', '/about/' ], [ 'Editorial &amp; sourcing policy', '/editorial-policy/' ],
		[ 'Contact &amp; corrections', '/contact/' ], [ 'Privacy policy', '/privacy-policy/' ],
	] ) . '</ul></nav>'
	. '</div>';
$footer = [ [
	'id' => $id7(), 'elType' => 'container', 'isInner' => false,
	'settings' => [
		'css_classes' => 'gd-footer gd-footer--v2', 'content_width' => 'boxed', 'boxed_width' => [ 'unit' => 'px', 'size' => 1200 ],
		'flex_direction' => 'column', 'flex_gap' => [ 'unit' => 'px', 'size' => 40, 'column' => '40', 'row' => '40', 'isLinked' => true ],
		'padding' => $dims( 48, 24, 24, 24 ), 'padding_mobile' => $dims( 36, 16, 20, 16 ),
		'background_background' => 'classic', 'background_color' => '#3A2318',
		'__globals__' => [ 'background_color' => 'globals/colors?id=primary' ],
	],
	'elements' => [
		[ 'id' => $id7(), 'elType' => 'widget', 'widgetType' => 'text-editor', 'elements' => [], 'settings' => [ 'editor' => $grid ] ],
		[ 'id' => $id7(), 'elType' => 'container', 'isInner' => true,
		  'settings' => [
			'css_classes' => 'gd-fbase', 'content_width' => 'full', 'flex_direction' => 'row', 'flex_direction_mobile' => 'row', 'flex_wrap' => 'wrap',
			'justify_content' => 'space-between', 'align_items' => 'center',
			'flex_gap' => [ 'unit' => 'px', 'size' => 12, 'column' => '12', 'row' => '12', 'isLinked' => true ],
		  ],
		  'elements' => [
			[ 'id' => $id7(), 'elType' => 'widget', 'widgetType' => 'copyright', 'elements' => [],
			  'settings' => [ 'shortcode' => '© [hfe_current_year] Grooming Dogs', 'align' => 'left', '_css_classes' => 'gd-copyright', '_flex_size' => 'none' ] ],
			[ 'id' => $id7(), 'elType' => 'widget', 'widgetType' => 'text-editor', 'elements' => [],
			  'settings' => [ 'editor' => '<a href="#" class="gd-totop">Back to top ↑</a>', '_flex_size' => 'none' ] ],
		  ] ],
	],
] ];
$title = 'Grooming Dogs Footer (guide pilot)';
$ex    = get_posts( [ 'post_type' => 'elementor-hf', 'post_status' => 'any', 'title' => $title, 'numberposts' => 1, 'fields' => 'ids' ] );
$fid   = $ex ? $ex[0] : wp_insert_post( [ 'post_type' => 'elementor-hf', 'post_status' => 'publish', 'post_title' => $title ] );
update_post_meta( $fid, 'ehf_template_type', 'type_footer' );
update_post_meta( $fid, 'ehf_target_include_locations', [ 'rule' => [ 'specifics' ], 'specific' => [ 'post-' . $page ] ] );
update_post_meta( $fid, 'ehf_target_exclude_locations', [] );
update_post_meta( $fid, 'ehf_target_user_roles', [ 'all' ] );
update_post_meta( $fid, '_elementor_edit_mode', 'builder' );
update_post_meta( $fid, '_elementor_template_type', 'wp-post' );
update_post_meta( $fid, '_elementor_version', ELEMENTOR_VERSION );
update_post_meta( $fid, '_elementor_data', wp_slash( wp_json_encode( $footer ) ) );
delete_post_meta( $fid, '_elementor_css' );
// The site footer (82) no longer renders on the pilot page.
update_post_meta( 82, 'ehf_target_exclude_locations', [ 'rule' => [ 'specifics' ], 'specific' => [ 'post-' . $page ] ] );
\Elementor\Plugin::$instance->files_manager->clear_cache();
WP_CLI::success( "pilot footer id=$fid (GD-04 only); footer 82 excludes post-$page" );
