<?php

class ToolKit{
  
      private $toolkit_screen_name;
      private static $instance;
       /*......*/
  
      static function GetInstance()
      {
          
          if (!isset(self::$instance))
          {
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
                    plugins_url('/toolkit-admin/public/png/admin20px.png'),
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
          <h2>@ToolKit</h2>
         </div>


       <?php }

      public function InitPlugin(){
        add_action('admin_menu', array( $this, 'PluginMenu' ));
      }
  
 }
 