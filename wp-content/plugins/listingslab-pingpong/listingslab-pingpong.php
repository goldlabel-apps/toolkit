<?php

/**
 * @link              https://listingslab.com?s=pingpong
 * @package           listingslab-pingpong
 *
 * @wordpress-plugin
 * Version:           10.0.7
 * Plugin Name:       @PingPong
 * Description:       Greet your visitors. No need to wait for them to contact you. Handles GDPR issues too
 * Plugin URI:        https://listingslab.com?s=pingpong
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'pingpong_VERSION', '10.0.7' );

// Load Listingslab PingPong Plugin.
require_once 'php/PingPong.php';
$PingPong = PingPong::GetInstance();
$PingPong->InitPlugin();