<?php

/**
 * @link              https://listingslab.com?s=boilerplate
 * @package           listingslab-boilerplate
 *
 * @wordpress-plugin
 * Version:           10.1.6
 * Plugin Name:       @PingPong
 * Description:       Boilerplate React/WordPress plugin
 * Plugin URI:        https://github.com/listingslab-software/toolkit
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'boilerplate', '10.1.6' );

require_once 'php/Boilerplate.php';
$Boilerplate = Boilerplate::GetInstance();
$Boilerplate->InitPlugin();