<?php

class pingpong_Widget extends WP_Widget {
 
    function __construct() {
        parent::__construct( false, __( '@PingPong', 'listingslab' ) );
    }
 
    function widget( $args, $instance ) {
        echo '<script>';
        $blogInfo = array();
        $fields = array(
            'name', 
            'description', 
            'wpurl', 
            'url', 
            'admin_email', 
            'charset', 
            'version', 
            'html_type',
            'language',
            'stylesheet_url',
            'stylesheet_directory',
            'template_url',
            'pingback_url',
            'atom_url',
            'rdf_url',
            'rss_url',
            'rss2_url',
            'comments_atom_url',
            'comments_rss2_url',
        );
        foreach($fields as $field) {
            $blogInfo[$field] = get_bloginfo($field);
        }
        echo 'var blogInfo = ' . json_encode( $blogInfo ) . ';';
        if (is_single()){
            echo 'var postData = ' . json_encode( get_post() ) . ';';
        } else {
            echo 'var postData = {};';
        }


        $logoId = get_theme_mod( 'custom_logo' );
        $img = wp_get_attachment_image_src( $logoId , 'full' );
        $customLogo = $img[0];
        echo 'var customLogo = ' . json_encode( $customLogo ) . ';';
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
