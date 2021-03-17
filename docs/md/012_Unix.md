#### Useful Unix

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