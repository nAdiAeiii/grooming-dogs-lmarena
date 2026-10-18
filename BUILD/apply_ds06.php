<?php
// DS-OD-06: apply kit-settings.json to kit 15 and site.css to Additional CSS. Run: wp --user=1 eval-file apply_ds06.php
$dir = getenv('HOME') . '/backups/grooming-dogs/build';
$new = json_decode( file_get_contents( "$dir/kit-settings.json" ), true );
if ( ! $new ) { WP_CLI::error( 'bad kit json' ); }
$old = get_post_meta( 15, '_elementor_page_settings', true );
$merged = array_merge( is_array( $old ) ? $old : [], $new );
update_post_meta( 15, '_elementor_page_settings', $merged );
wp_update_post( [ 'ID' => 15, 'post_title' => 'Grooming Dogs Kit (DS-OD-06 2026-10-05)' ] );
$css = file_get_contents( "$dir/site.css" );
$r = wp_update_custom_css_post( $css, [ 'stylesheet' => 'hello-elementor' ] );
if ( is_wp_error( $r ) ) { WP_CLI::error( $r->get_error_message() ); }
\Elementor\Plugin::$instance->files_manager->clear_cache();
WP_CLI::success( 'kit 15 + custom css ' . $r->ID . ' updated; Elementor CSS cache cleared' );
