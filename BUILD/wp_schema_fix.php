<?php
// GD-01 to GD-17: remove legacy Rank Math rich-snippet meta so the page-type default (Article) applies.
// Rank Math 1.0.279 ignores the default and drops global entities when legacy `rank_math_rich_snippet` exists.
// GD-00 and GD-18 to 21 keep `off` (no Article); gd-site-rules.php (5) restores their global entities.
// Run: wp --user=1 eval-file wp_schema_fix.php
$ids = get_posts( [ 'post_type' => 'page', 'post_status' => 'any', 'meta_key' => '_gd_page_id', 'numberposts' => -1, 'fields' => 'ids' ] );
$n = 0;
foreach ( $ids as $id ) {
	$gd = get_post_meta( $id, '_gd_page_id', true );
	$num = (int) substr( $gd, 3 );
	if ( $num >= 1 && $num <= 17 && 'article' === get_post_meta( $id, 'rank_math_rich_snippet', true ) ) {
		delete_post_meta( $id, 'rank_math_rich_snippet' );
		delete_post_meta( $id, 'rank_math_snippet_article_type' );
		$n++;
	}
}
WP_CLI::success( "legacy article meta removed on $n pages" );
