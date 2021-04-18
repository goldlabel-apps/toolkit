<?php

class pingpong_Widget extends WP_Widget {
 
    function __construct() {
        parent::__construct( false, __( '@PingPong', 'listingslab' ) );
    }
 
    function widget( $args, $instance ) {
        echo '<script>';
        if (is_single()){
            echo 'var postData = ' . json_encode( get_post() ) . ';';
        } else {
            echo 'var postData = {};';
        }
        echo '</script>';
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
        echo '<h3>Settings</h3>';
        echo '<div class="pingpong-widget-settings">';

        $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( '', 'pingpong' );
                
        echo '<p>';
        echo esc_attr_e( 'Title', 'pingpong' );
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
 
add_action( 'widgets_init', 'pingpong_register_widget' ); 

function pingpong_register_widget() {
    register_widget( 'pingpong_Widget' );
}



        // $fields = array(
        //     'name', 
        //     'description', 
        //     'wpurl',
        //     'admin_email', 
        // );

        // $data = array();
        // foreach($fields as $field) {
        //     $data[$field] = get_bloginfo($field);
        // }

