<?php

class ToolKit{
  
      private $toolkit_screen_name;
      private static $instance;
  
      static function GetInstance(){
          if (!isset(self::$instance)) {
              self::$instance = new self();
          }
          return self::$instance;
      }
      
      public function PluginMenu(){

        $this->toolkit_screen_name = add_menu_page(
                    '@ToolKit', 
                    '@ToolKit', 
                    'manage_options',
                    __FILE__, 
                    array($this, 'RenderPage'), 
                    plugins_url('/listingslab-toolkit/public/png/admin20px.png'),
                    2
              );
        if ( is_plugin_active('listingslab_pingpong')){
                $this->toolkit_screen_name = add_submenu_page(
                    __FILE__, 
                    '@PingPong', 
                    '@PingPong', 
                    'manage_options', 
                    __FILE__.'/?plugin=pingpong', 
                    array($this, 'RenderPage')
                );
            }
        }

      
      public function RenderPage(){ ?>

        <div class='none'>
          <?php 
            $fields = array(
                'name', 'description', 'wpurl', 'url', 
                'admin_email', 'charset','version', 
                'html_type', 'language'
            );
            $toolkitData = array();
            foreach($fields as $field) {
                $toolkitData[$field] = get_bloginfo($field);
            }
            $toolkitData[ 'pingpong_active' ] = false;
            if ( is_plugin_active('listingslab_pingpong')){
              $toolkitData[ 'active' ] = true;
            };
            $toolkitData[ 'pwaify_active' ] = false;
            if ( is_plugin_active('listingslab_pwaify')){
              $toolkitData[ 'pwaify_active' ] = true;
            };
            $toolkitData[ 'kart_active' ] = false;
            if ( is_plugin_active('listingslab_kart')){
              $toolkitData[ 'pwaify_active' ] = true;
            };
            echo '<script>';
            echo 'var toolkitData = ' . json_encode( $toolkitData ) . ';';
            echo '</script>';
            $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/build/index.html');
            $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
          'react/build/static', $html);
            $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
          'react/build/static', $html);
            echo $html;
          ?>
<!-- <pre><?php echo json_encode( $toolkitData, JSON_PRETTY_PRINT ); ?></pre> -->
         </div>

       <?php }

      public function InitPlugin(){
        add_action('admin_menu', array( $this, 'PluginMenu' ));
      }
  
 }
 