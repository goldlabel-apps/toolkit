<?php

/**
 * @link              https://listingslab.com?s=toolkit
 * @package           listingslab-toolkit
 *
 * @wordpress-plugin
 * Version:           10.0.7b
 * Plugin Name:       @_ToolKit Manager
 * Description:       This suite of WordPress Plugins opens up a world of good stuff to any tired old WordPress site. This @ToolKit Manager Plugin is required for all @_ToolKit plugins. Create an account to get a personal API key and access to the best new features
 * Plugin URI:        https://github.com/listingslab-software/toolkit
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'toolkit_VERSION', '10.0.7b' );

// Load Listingslab ToolKit Admin Plugin.
require_once 'php/ToolKit.php';
$ToolKit = ToolKit::GetInstance();
$ToolKit->InitPlugin();