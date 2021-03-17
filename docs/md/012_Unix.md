#### Useful Unix

Symlink 
```bash

ln -s ~/Desktop/Node/toolkit/wp-content/plugins/kart ~/Desktop/Node/wordpress/listingslab.com/wp-content/plugins/

ln -s ~/Desktop/Node/toolkit/wp-content/plugins/pingpong ~/Desktop/Node/wordpress/listingslab.com/wp-content/plugins/

ln -s ~/Desktop/Node/toolkit/wp-content/plugins/pwaify ~/Desktop/Node/wordpress/listingslab.com/wp-content/plugins/

ln -s ~/Desktop/Node/toolkit/wp-content/plugins/toolkit-admin ~/Desktop/Node/wordpress/listingslab.com/wp-content/plugins/
```

Show all the scripts in the package.json
```bash
yarn run
```

Commit and push your branch with a dot commit
```bash
git add . && git commit -m '.' && git push
```

SSH to hostgator

```bash
ssh listilab@192.185.226.103 -p2222 -o PubkeyAuthentication=no
```

SCP

```bash
scp -o PubkeyAuthentication=no -P 2222 listilab@192.185.226.103:/thebay.site/bollix ~/Desktop/Node/wordpress/listingslab.com.zip 
```