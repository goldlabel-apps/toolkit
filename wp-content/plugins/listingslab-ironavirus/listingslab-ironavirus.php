<?php

/**
 * @link              https://listingslab.com?s=ironavirus
 * @package           listingslab-ironavirus
 *
 * @wordpress-plugin
 * Version:           10.2.4
 * Plugin Name:       @Ironavirus
 * Description:       Ironavirus. Write your own damn slogan
 * Plugin URI:        https://github.com/listingslab-software/toolkit
 * Author:            listingslab
 * Author URI:        https://listingslab.com?s=author
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       listingslab
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) or die( 'Really?' );
define( 'ironavirus', '10.2.4' );

require_once 'php/Ironavirus.php';
$Ironavirus = Ironavirus::GetInstance();
$Ironavirus->InitPlugin();