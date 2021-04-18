<?php

class pingpong_Widget extends WP_Widget {
 
    function __construct() {
        parent::__construct( false, __( '@PingPong', 'listingslab' ) );
    }
 
    function widget( $args, $instance ) {

    }
}
 
add_action( 'widgets_init', 'pingpong_register_widget' ); 

function pingpong_register_widget() {
    register_widget( 'pingpong_Widget' );
}
