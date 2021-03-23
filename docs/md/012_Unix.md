#### Useful Unix

Commit and push your branch with a dot commit
```bash
git add . && git commit -m '.' && git push
```


Symlink 
```bash

ln -s ~/Desktop/Node/toolkit/wp-content/plugins/listingslab-toolkit ~/Desktop/Node/wordpress/20210321/wp-content/plugins/

ln -s ~/Desktop/Node/toolkit/wp-content/plugins/listingslab-kart ~/Desktop/Node/wordpress/20210321/wp-content/plugins/

ln -s ~/Desktop/Node/toolkit/wp-content/plugins/listingslab-pingpong ~/Desktop/Node/wordpress/20210321/wp-content/plugins/

ln -s ~/Desktop/Node/toolkit/wp-content/plugins/listingslab-pwaify ~/Desktop/Node/wordpress/20210321/wp-content/plugins/
```

Show all the scripts in the package.json
```bash
yarn run
```


SSH to hostgator

```bash
ssh listilab@192.185.226.103 -p2222 -o PubkeyAuthentication=no
```

SCP

```bash
scp -o PubkeyAuthentication=no -P 2222 listilab@192.185.226.103:/thebay.site/bollix ~/Desktop/Node/wordpress/listingslab.com.zip 
```