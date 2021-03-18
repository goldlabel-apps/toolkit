<?php

/**
 * @link              https://listingslab.com?s=wordpress
 * @package           listingslab
 *
 * @wordpress-plugin
 * Version:           10.0.1
 * Plugin Name:       @ToolKit
 * Description:       Listingslab ToolKit Plugin &nbsp;<a href="/wp-admin/admin.php?page=toolkitadmin">Settings</a>
 * Plugin URI:        https://toolkitadmin.com/wordpress-plugin
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

if ( ! defined( 'WPINC' ) ) { die; }
define( 'toolkitadmin_VERSION', '10.0.1' );

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
    $fields = array(
                'name', 
                'description', 
                'wpurl', 
                'url', 
                'admin_email', 
                'charset', 
                'version', 
                'html_type', 
                'language'
            );
    $data = array();
    foreach($fields as $field) {
        $data[$field] = get_bloginfo($field);
    }
    echo '<div class="traditional">';
    
    echo '<img src="' . plugin_dir_url(__DIR__) . 'toolkit-admin/public/png/wordpress_plugin.png' . '" />';
    echo '<form method="post" action="options.php">';
   

    echo settings_fields( 'toolkitadmin_options_group' );

	echo '<div class="title-field">';
    echo '<h1>@ToolKit Settings</h1>';

    echo '<button onclick="window.location.href=\'/?s=fuck\'" class="button button-secondary">Secondary button</button>';

	echo '</div>';
    echo '<div class="traditional-field">';

    echo '<h3>Enabled? ';
    echo '<input type="checkbox" name="toolkitadmin_enabled" value="1" ' . checked( 1, get_option( 'toolkitadmin_enabled' ), false ) . ' />';
    echo '</h3></div>';

    echo '<div class="traditional-field">';
    echo '<h3>toolkitadmin_affiliateId';
    echo '<input type="text" name="toolkitadmin_affiliateId" value="' . get_option( 'toolkitadmin_affiliateId' ) . '" /></h3>';

    echo submit_button();




    echo '</form>';

    
    echo '<div class="footer">';

    echo '<a href="/" target="_self">Home</a>';

    echo '&nbsp;|&nbsp;';
     echo '<a href="https://listingslab.com" target="_blank">Listingslab.com</a>';
    
    echo '&nbsp;|&nbsp;';
    echo '<a href="https://github.com/listingslab-software/toolkit" target="_blank">GitHub</a>';

    echo '</div>';  


    echo '</div>';    

}
