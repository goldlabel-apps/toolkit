<?php

/**
 * @link              https://listingslab.com?s=toolkit
 * @package           listingslab-toolkit
 *
 * @wordpress-plugin
 * Version:           10.0.2
 * Plugin Name:       @ToolKit
 * Description:       Manage Listingslab ToolKit Plugin
 * Plugin URI:        https://listingslab.com?s=toolkit
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'toolkit_VERSION', '10.0.2' );

// Load Listinslab ToolKit Admin Plugin.
require_once 'php/ToolKit.php';
$ToolKit = ToolKit::GetInstance();
$ToolKit->InitPlugin();