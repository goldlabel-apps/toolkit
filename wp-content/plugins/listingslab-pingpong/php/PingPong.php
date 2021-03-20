<?php

class PingPong{
  
      private static $instance;
  
      static function GetInstance(){
          if (!isset(self::$instance)) {
              self::$instance = new self();
          }
          return self::$instance;
      }
      
      public function InitPlugin(){
        
      }
  
 }
 