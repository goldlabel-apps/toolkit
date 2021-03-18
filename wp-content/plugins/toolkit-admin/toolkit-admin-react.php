<?php
function advicator_PWA() {
	$data = array();
    $fields = array(
        'name', 'description', 
        'wpurl','admin_email', 
    );
    foreach($fields as $field) {
        $data[$field] = get_bloginfo($field);
    }
    $data[ 'advicator_affiliateId' ] = get_option( 'advicator_affiliateId' );

    // $post = get_post();
    // $post->post_content = null;
    // $data[ 'post' ] = json_encode( $post );
    
    if ( get_option( 'advicator_enabled' ) ){
        echo '<div class="advicator-pwa">';
        $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/pwa/build/index.html');
        $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
        'react/pwa/build/static', $html);
        $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
        'react/pwa/build/static', $html);
        echo '<script>';
        echo 'var pluginInfo = ' . json_encode($data) . ';';
        echo '</script></div>';
        echo $html;
    }
}
