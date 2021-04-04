<?php

class pingpong_Widget extends WP_Widget {
 
    function __construct() {
        parent::__construct( false, __( 'ToolKit Animatedsvg', 'listingslab' ) );
    }
 
    function widget( $args, $instance ) {
               
        $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/build/index.html');
        $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
            'react/build/static', $html);
        $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
            'react/build/static', $html);
        echo $html;
    }

    function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
        return $instance;
    }
 
    function form( $instance ) {
        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( '', 'pingpong' );
        echo '<h3>ToolKit Settings</h3>';
        echo '<div class="boilerplate-widget-settings">';
        echo '<p>';
        echo esc_attr_e( 'Title', 'boilerplate' );
        echo '<input 
                class="widefat"
                id="' . esc_attr( $this->get_field_id( 'title' ) ) . '"
                type="text"
                name="' . esc_attr( $this->get_field_name( 'title' ) ) . '"
                value="' . esc_attr( $title ) . '"
            ';
        echo ' />';
        echo '</p>';
        echo '</div>';
    }
}
 
add_action( 'widgets_init', 'animatedsvg_register_widget' ); 

function boilerplate_register_widget() {
    register_widget( 'animatedsvg_Widget' );
}
