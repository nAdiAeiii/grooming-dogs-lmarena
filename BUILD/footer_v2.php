<?php
// Site footer v2 (owner-approved 2026-10-05; GD-04 pilot, now the single site-wide footer).
// Returns the Elementor data array. Used by wp_shell.php and wp_guide_rollout.php.
$fid7  = function () { return substr( md5( uniqid( '', true ) ), 0, 7 ); };
$fdims = function ( $t, $r, $b, $l ) { return [ 'unit' => 'px', 'top' => "$t", 'right' => "$r", 'bottom' => "$b", 'left' => "$l", 'isLinked' => false ]; };
$fli   = function ( $items ) {
	return implode( '', array_map( function ( $i ) { return '<li><a href="' . $i[1] . '">' . $i[0] . '</a></li>'; }, $items ) );
};
// Site description: the existing home-page copy (GD-00), verbatim. Link labels: the existing footer labels.
$fgrid = '<div class="gd-fgrid">'
	. '<div class="gd-fbrand"><a class="gd-fmark" href="/">Grooming Dogs</a>'
	. '<p>Clear, step-by-step guides to grooming your dog at home: brushing, bathing, nails, ears, teeth and trims. They also help you know when a groomer or your vet should take over.</p>'
	. '<p class="gd-fsmall">We\'re a guide, not a grooming salon, and we don\'t give veterinary advice.</p></div>'
	. '<nav aria-label="Grooming guides"><p class="gd-flabel">Grooming guides</p><ul class="gd-ftwo">' . $fli( [
		[ 'Full routine', '/how-to-groom-your-dog-at-home/' ], [ 'Schedule', '/how-often-should-you-groom-your-dog/' ],
		[ 'Coat types', '/dog-coat-types/' ], [ 'Bathing', '/bathing-your-dog/' ], [ 'Brushing', '/brushing-your-dog/' ],
		[ 'Haircuts &amp; trimming', '/dog-haircuts-and-trimming/' ], [ 'Nails', '/trimming-dog-nails/' ],
		[ 'Ears', '/cleaning-dog-ears/' ], [ 'Teeth', '/brushing-dog-teeth/' ],
	] ) . '</ul></nav>'
	. '<nav aria-label="Help and tools"><p class="gd-flabel">Help &amp; tools</p><ul>' . $fli( [
		[ 'Problems', '/dog-grooming-problems/' ], [ 'Tools', '/dog-grooming-tools/' ], [ 'Choosing a groomer', '/choosing-a-dog-groomer/' ],
		[ 'Grooming cost', '/dog-grooming-cost/' ], [ 'Glossary', '/dog-grooming-glossary/' ],
	] ) . '</ul></nav>'
	. '<nav aria-label="About the site"><p class="gd-flabel">About the site</p><ul>' . $fli( [
		[ 'About', '/about/' ], [ 'Editorial &amp; sourcing policy', '/editorial-policy/' ],
		[ 'Contact &amp; corrections', '/contact/' ], [ 'Privacy policy', '/privacy-policy/' ],
	] ) . '</ul></nav>'
	. '</div>';

return [ [
	'id' => $fid7(), 'elType' => 'container', 'isInner' => false,
	'settings' => [
		'css_classes' => 'gd-footer gd-footer--v2', 'content_width' => 'boxed', 'boxed_width' => [ 'unit' => 'px', 'size' => 1200 ],
		'flex_direction' => 'column', 'flex_gap' => [ 'unit' => 'px', 'size' => 40, 'column' => '40', 'row' => '40', 'isLinked' => true ],
		'padding' => $fdims( 48, 24, 24, 24 ), 'padding_mobile' => $fdims( 36, 16, 20, 16 ),
		'background_background' => 'classic', 'background_color' => '#3A2318',
		'__globals__' => [ 'background_color' => 'globals/colors?id=primary' ],
	],
	'elements' => [
		[ 'id' => $fid7(), 'elType' => 'widget', 'widgetType' => 'text-editor', 'elements' => [], 'settings' => [ 'editor' => $fgrid ] ],
		[ 'id' => $fid7(), 'elType' => 'container', 'isInner' => true,
		  'settings' => [
			'css_classes' => 'gd-fbase', 'content_width' => 'full', 'flex_direction' => 'row', 'flex_direction_mobile' => 'row', 'flex_wrap' => 'wrap',
			'flex_gap' => [ 'unit' => 'px', 'size' => 12, 'column' => '12', 'row' => '12', 'isLinked' => true ],
		  ],
		  'elements' => [
			[ 'id' => $fid7(), 'elType' => 'widget', 'widgetType' => 'copyright', 'elements' => [],
			  'settings' => [ 'shortcode' => '© [hfe_current_year] Grooming Dogs', 'align' => 'left', '_css_classes' => 'gd-copyright', '_flex_size' => 'none' ] ],
			[ 'id' => $fid7(), 'elType' => 'widget', 'widgetType' => 'text-editor', 'elements' => [],
			  'settings' => [ 'editor' => '<a href="#" class="gd-totop">Back to top ↑</a>', '_flex_size' => 'none' ] ],
		  ] ],
	],
] ];
