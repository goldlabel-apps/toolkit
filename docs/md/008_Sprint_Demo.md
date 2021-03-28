# @ToolKit Documentation

Sprint Demo  
Product Owner: John Smith, 
Developers: Bob the developer, team  
https://siteurl

## 1. Duplicate PROD

Start by logging in to [PROD](https://siteurl/wp-admin) & creating a local version of the site for development
```
	- url: https://woocommerce-368502-1795531.cloudwaysapps.com/wp-admin
  - U: listingslab@me.com
	- P: theBuild3r
```
## 2. Local LAMP

My local stack uses MAMP, (because I use mac) running at the url http://localhost:8888 so I end up with something like this

![localhost](../../media/sprintdemo/localhost.png)

The site has an Astra child theme using Elementor for design & runs alongside a WooCommerce with a few plugins. 

Any changes made as a WP Admin are fine; they're just changes to various fields in the MySQL database. There will be a certain amount of tweaks to things like Subscriptions we'll need to make in [wp-admin](http://localhost:8888/wp-admin/). This should not require dev skills - just clear documentation 

We aim to leave all that code completely unchanged whilst effecting the features we need with our own plugin. 

To link the two pieces together there is probably a more elegant way than what I've done here, which is to insert a snippet of HTML into the page using Elementor's drag and drop plugin.

[Add this snippet in elementor]https://woocommerce-368502-1795531.cloudwaysapps.com/wp-admin/post.php?post=30&action=elementor)

```html
<div id="kart-trial">
  <br /><br />
  <a href="/wp-admin/plugins.php" target="_self">Acitvate Kart Plugin</a>
</div>
```

![localhost](../../media/sprintdemo/elementor.png)

## 3. kart WordPress Plugin

The plugin is really a React App. It gets included everytime WordPress renders. If it detects a div on the page with `id="kart-gummies-trial"`, then it will render the new Kart component into it

The trick here is going to effect the public HTML of the WordPress site without making any changed to the theme's code. This is where we do something unique. We're going to embed a fully encapsulated React PWA into our theme. This React App is super clever. It doesn't need to render anything, or it can provide us with all the UI we need like 

React apps get compiled into a compressed build folder. It is that build folder which we can easily grab and inject into the theme using WordPress hooks and a bit of tweaking

[admin-pwa.php](https://github.com/listingslab-software/kart/blob/develop/plugins/kart/react/admin-pwa.php)

```php
<?php
function kart_PWA() {
  $data = array();
    $fields = array(
        'name', 'description', 
        'wpurl','admin_email', 
    );
    foreach($fields as $field) {
        $data[$field] = get_bloginfo($field);
    }
    $data[ 'wordpress_variables' ] = 'can be added here';

    if ( get_option( 'kart_enabled' ) ){
        echo '<div class="kart-pwa">';
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
```

Making changes to a plugin is done by developers of all kinds, but they all know how to  manage the codebase on [GitHub](https://github.com/listingslab-software/kart/projects/1)

Developers clone the [kart plugin repo](https://github.com/listingslab-software/kart/tree/develop/plugins/kart) and install it on their local WordPress. The plugin is [activated](https://woocommerce-368502-1795531.cloudwaysapps.com/wp-admin/plugins.php) like any plugin

![clone](../../media/sprintdemo/clone.png) 

The unix command `ln` can be used to create a symlink from wherever you cloned the repo to your wordpress installation which lets you make changes to the code and see the results in context 

```
ln -s ~/Desktop/Node/kart/plugins/kart ~/Desktop/Node/wordpress/kart/wp-content/plugins

```

![clone](../../media/sprintdemo/activate_plugin.png) 

## 4. PHP, JSON (JavaScript Object Notation) &amp; WordPress   

Now we can code. The PHP piece is the place to begin because this is a WordPress plugin after all. Get started with the [Plugin Settings](https://woocommerce-368502-1795531.cloudwaysapps.com/wp-admin/admin.php?page=kart) page. Here  set up the plugin's Options. There is only one option now; `kart_enabled` to turn the plugin on and off. We can easily add new options like `kart_affiliteId`

__`/kart/plugins/kart/admin/admin-traditional.php`__

```php
<?php

function kart_register_settings() {
   add_option( 'kart_enabled', true );
   register_setting( 
    'kart_options_group', 
    'kart_enabled', 
    'kart_callback' );

  // add_option( 'kart_affiliteId', 'XXX123' );
  //  register_setting( 
  //   'kart_options_group', 
  //   'kart_affiliteId', 
  //   'kart_callback' );

}
...etc
```

WordPress represents each piece of content as PHP object called `$post`. The theme's job is to interpret and display that object as HTML that is returned to the visitor. 

Here's that same Object described in JSON. As you can see, it's the same thing, just with slightly different syntax. JSON is important. It's like XML which did a great job as being a way to structure data in a generic way. 

The reason JSON important is because EVERYTHING talks JSON now, including all parts of our DEV stack; WordPress REST API, React & Node and NoSQL Databases store records as JSON objects

We might develop our own custom datashape which looks something like this

[exmplePostObj.jsx](https://github.com/listingslab-software/kart/blob/develop/plugins/kart/react/pwa/src/redux/app/exmplePostObj.jsx)

```javascript
export const exmplePostObj = {
  "ID": 12345,
  "post_title": "Lorem ipsum dolor",
  "post_excerpt": `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  "product_price": 6.99,
  "product_image": `/wp-content/uploads/2021/03/home_trial.png`,
  "kart_upsell_calm": {
    "prices": {
      "mild": 29.99,
      "moderate": 49.99,
      "stronger": 69.99,
    },
    "image": `/wp-content/uploads/2020/10/calm.png`   
  },
  ...
}
```

## 5. Build Pipeline

- zip the plugin (excluding the node_modules dir) up and deploy to PROD
- or run test scripts
- or push to AWS & run Continuous Integration scripts etc.


## Resources

- [Add to WooCommerce Cart using URLs](https://www.businessbloomer.com/woocommerce-custom-add-cart-urls-ultimate-guide/)
- [MAMP](https://www.mamp.info)
- [Duplicator](https://wordpress.org/plugins/duplicator)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
  - [Store API](https://woocommerce-368502-1795531.cloudwaysapps.com/wp-json/wc/store/)

![Listingslab @ToolKit](../png/react_wordpress.png)