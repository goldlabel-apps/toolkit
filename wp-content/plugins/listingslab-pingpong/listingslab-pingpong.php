<?php

/**
 * @link              https://listingslab.com?s=pingpong
 * @package           listingslab-pingpong
 *
 * @wordpress-plugin
 * Version:           10.0.4
 * Plugin Name:       @PingPong
 * Description:       Manage Listingslab ToolKit Plugin
 * Plugin URI:        https://listingslab.com?s=pingpong
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'pingpong_VERSION', '10.0.4' );

// Load Listingslab PingPong Plugin.
require_once 'php/PingPong.php';
$PingPong = PingPong::GetInstance();
$PingPong->InitPlugin();