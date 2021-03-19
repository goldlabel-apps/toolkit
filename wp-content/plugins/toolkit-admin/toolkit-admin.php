<?php

/**
 * @link              https://listingslab.com?s=toolkit
 * @package           listingslab
 *
 * @wordpress-plugin
 * Version:           10.0.2
 * Plugin Name:       @ToolKit
 * Description:       Listingslab ToolKit Plugin &nbsp;<a href="/wp-admin/admin.php?page=toolkitadmin">Settings</a>
 * Plugin URI:        https://listingslab.com?s=toolkit
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

if ( ! defined( 'WPINC' ) ) { die; }
define( 'toolkitadmin_VERSION', '10.0.2' );

// toolkitadmin WordPress Plugin Settings Page

function toolkitadmin_register_settings() {
   add_option( 'toolkitadmin_enabled', true );
   register_setting( 
    'toolkitadmin_options_group', 
    'toolkitadmin_enabled', 
    'toolkitadmin_callback' );

  add_option( 'toolkitadmin_affiliateId', 'XYZ-123' );
   register_setting( 
    'toolkitadmin_options_group', 
    'toolkitadmin_affiliateId', 
    'toolkitadmin_callback' );
}
add_action( 'admin_init', 'toolkitadmin_register_settings' );

add_action('admin_menu', 'toolkitadmin_plugin_setup_menu');
function toolkitadmin_plugin_setup_menu(){
    add_menu_page( 
        'toolkitadmin', 
        '@ToolKit', 
        'manage_options', 
        'toolkitadmin', 
        'toolkitadmin_admin',
        plugin_dir_url(__DIR__) . 'toolkit-admin/public/png/admin20px.png',
        2
    );
}

function toolkitadmin_admin(){
    $data = array();
    $fields = array(
        'name', 'description', 
        'wpurl','admin_email', 
    );
    foreach($fields as $field) {
        $data[$field] = get_bloginfo($field);
    }
    echo '<div class="toolkitadmin_admin">';
    //echo plugin_dir_path( __FILE__ ) . 'react/build/index.html';
    $html = file_get_contents(plugin_dir_path( __FILE__ ) . 'react/build/index.html');
    $html = str_replace('href="/static', 'href="'. plugin_dir_url( __FILE__ ) .
    'react/build/static', $html);
    $html = str_replace('src="/static', 'src="'. plugin_dir_url( __FILE__ ) .
    'react/build/static', $html);
    echo '<script>';
    echo 'var pluginInfo = ' . json_encode($data) . ';';
    echo '</script>';
    echo '</div>';
    echo $html;
}
