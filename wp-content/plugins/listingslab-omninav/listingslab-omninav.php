<?php

/**
 * @link              https://listingslab.com?s=omninav
 * @package           listingslab-omninav
 *
 * @wordpress-plugin
 * Version:           10.2.0
 * Plugin Name:       @Omninav
 * Description:       Omninav React/WordPress plugin
 * Plugin URI:        https://github.com/listingslab-software/toolkit
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'omninav', '10.2.0' );

require_once 'php/Omninav.php';
$Omninav = Omninav::GetInstance();
$Omninav->InitPlugin();