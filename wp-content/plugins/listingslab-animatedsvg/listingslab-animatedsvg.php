<?php

/**
 * @link              https://listingslab.com?s=animatedsvg
 * @package           listingslab-animatedsvg
 *
 * @wordpress-plugin
 * Version:           10.2.4
 * Plugin Name:       @Animatedsvg
 * Description:       Animated SVG React/WordPress plugin
 * Plugin URI:        https://github.com/listingslab-software/toolkit
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'animatedsvg', '10.2.4' );

require_once 'php/Animatedsvg.php';
$Animatedsvg = Animatedsvg::GetInstance();
$Animatedsvg->InitPlugin();