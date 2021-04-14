<?php

/**
 * @link              https://listingslab.com?s=toolkit
 * @package           listingslab-toolkit
 *
 * @wordpress-plugin
 * Version:           10.2.3
 * Plugin Name:       @_ToolKit Manager
 * Description:       This suite of WordPress Plugins opens up a world of good stuff to any tired old WordPress site. The Manager Plugin is required for all subplugins. Create a Free account to get a personal API key with access to the best new features
 * Plugin URI:        https://github.com/listingslab-software/toolkit
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'toolkit_VERSION', '10.2.3' );

require_once 'php/ToolKit.php';
$ToolKit = ToolKit::GetInstance();
$ToolKit->InitPlugin();