<?php
// Deployment checklist H, steps 7–12 (owner authorized publication 2026-10-05). Run: wp --user=1 eval-file wp_deploy.php
$ids = get_posts( [ 'post_type' => 'page', 'post_status' => 'any', 'meta_key' => '_gd_page_id', 'numberposts' => -1, 'fields' => 'ids' ] );
if ( 22 !== count( $ids ) ) { WP_CLI::error( 'expected 22 launch pages, found ' . count( $ids ) ); }
// 7. publish the 22 launch pages
foreach ( $ids as $id ) { if ( 'publish' !== get_post_status( $id ) ) { wp_update_post( [ 'ID' => $id, 'post_status' => 'publish' ] ); } }
// 8. static front page = GD-00 (38), no posts page
update_option( 'show_on_front', 'page' ); update_option( 'page_on_front', 38 ); update_option( 'page_for_posts', 0 );
// 9. trash (restorable) the default post and the stray Elementor draft
foreach ( [ 1, 7 ] as $t ) { if ( get_post( $t ) && 'trash' !== get_post_status( $t ) ) { wp_trash_post( $t ); } }
// 10. header + footer on the entire website
foreach ( [ 80, 82 ] as $h ) { update_post_meta( $h, 'ehf_target_include_locations', [ 'rule' => [ 'basic-global' ], 'specific' => [] ] ); }
// 11. activate the 11 staged Rank Math redirects
global $wpdb; $n = $wpdb->query( "UPDATE {$wpdb->prefix}rank_math_redirections SET status='active', updated=NOW() WHERE status='inactive'" );
// 12. rewrites, sitemap, CSS caches
flush_rewrite_rules( true );
if ( class_exists( '\RankMath\Sitemap\Cache' ) ) { \RankMath\Sitemap\Cache::invalidate_storage(); }
\Elementor\Plugin::$instance->files_manager->clear_cache();
$pub = count( get_posts( [ 'post_type' => 'page', 'post_status' => 'publish', 'meta_key' => '_gd_page_id', 'numberposts' => -1, 'fields' => 'ids' ] ) );
WP_CLI::success( "published=$pub/22 front=" . get_option( 'page_on_front' ) . " redirects_activated=$n trashed=" . get_post_status( 1 ) . '/' . get_post_status( 7 ) );
