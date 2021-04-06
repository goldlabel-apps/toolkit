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

              $this->toolkit_screen_name = add_submenu_page(
                  __FILE__, 
                  '@PingPong', 
                  '@PingPong', 
                  'manage_options', 
                  __FILE__.'/?plugin=pingpong', 
                  array($this, 'RenderPage')
              );
              
            }

      
      public function RenderPage(){ ?>

        <div class='none'>
          <?php 
            $wpData = array();
            $fields = array(
                'name', 
                'description', 
                'url', 
                'admin_email'
            );
            foreach($fields as $field) {
                $wpData[$field] = get_bloginfo($field);
            }
            $wpData[ 'avatar' ] = get_site_icon_url();

            $wpData[ 'pingpong' ] = false;
            $activePlugins = get_option('active_plugins');
            $plugins = get_plugins();
            $activated_plugins = array();
            foreach ( $activePlugins as $p ){           
                if(isset($plugins[$p])){
                  if ( $plugins[$p]['Name'] == '@PingPong' ){
                    $wpData[ 'pingpong' ] = true;
                  }
                }           
            }

            echo '<script>';
            echo 'var wpData = ' . json_encode( $wpData ) . ';';
            echo '</script>';

            $html = file_get_contents(plugin_dir_path( __DIR__ ) . 'react/build/index.html');
            $html = str_replace('href="/static', 'href="'. plugin_dir_url( __DIR__ ) .
          'react/build/static', $html);
            $html = str_replace('src="/static', 'src="'. plugin_dir_url( __DIR__ ) .
          'react/build/static', $html);
            echo $html;
          ?>

          <style type="text/css">
            .admin-page-footer{

            }
            
          </style>
          <div class="admin-page-footer">


            <pre><?php echo json_encode( $wpData, JSON_PRETTY_PRINT ); ?></pre>
            <ul>
              <li><a href="https://github.com/listingslab-software/toolkit/blob/master/wp-content/plugins/listingslab-toolkit.zip?raw=true" target="_blank">zip</a></li>
              <li><a href="https://github.com/listingslab-software/toolkit/" target="_blank">GitHub Repo</a></li>
            </ul>

          </div>
         </div>

       <?php }

      public function InitPlugin(){
        add_action('admin_menu', array( $this, 'PluginMenu' ));
        add_filter('show_admin_bar', '__return_false');
      }
  
 }
 