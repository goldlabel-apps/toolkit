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
                  '@PWAify', 
                  '@PWAify', 
                  'manage_options', 
                  __FILE__.'/?plugin=pwaify', 
                  array($this, 'RenderPage')
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
            $toolkitData = array();
            $fields = array(
                'name', 'description', 'wpurl', 
                'admin_email', 'language'
            );
            foreach($fields as $field) {
                $toolkitData[$field] = get_bloginfo($field);
            }
            $toolkitData[ 'pingpong' ] = false;
            $toolkitData[ 'pwaify' ] = false;
            $toolkitData[ 'kart' ] = false;
            $apl=get_option('active_plugins');
            $plugins=get_plugins();
            $activated_plugins=array();
            foreach ($apl as $p){           
                if(isset($plugins[$p])){
                  if ( $plugins[$p]['Name'] == '@PingPong' ){
                    $toolkitData[ 'pingpong' ] = true;
                  }
                  if ( $plugins[$p]['Name'] == '@PWAify' ){
                    $toolkitData[ 'pwaify' ] = true;
                  }
                  if ( $plugins[$p]['Name'] == '@Kart' ){
                    $toolkitData[ 'kart' ] = true;
                  }
                }           
            }

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

<pre><?php echo json_encode( $toolkitData, JSON_PRETTY_PRINT ); ?></pre>


          <ul>
            <li><a href="https://github.com/listingslab-software/toolkit/blob/master/wp-content/plugins/listingslab-pingpong.zip?raw=true" target="_blank">pingpong</a></li>
            <li><a href="https://github.com/listingslab-software/toolkit/blob/master/wp-content/plugins/listingslab-pwaify.zip?raw=true" target="_blank">pwaify</a></li>
            <li><a href="https://github.com/listingslab-software/toolkit/blob/master/wp-content/plugins/listingslab-kart.zip?raw=true" target="_blank">kart</a></li>

            <li><a href="https://github.com/listingslab-software/toolkit/" target="_blank">GitHub</a></li>
          </ul>
         </div>

       <?php }

      public function InitPlugin(){
        add_action('admin_menu', array( $this, 'PluginMenu' ));
      }
  
 }
 