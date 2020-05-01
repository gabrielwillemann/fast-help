### Update local list of available packages

```sh
sudo apt update
```

### Search packages
```sh
sudo apt list *MYPACK*
sudo apt search MYPACK
```

### Install packages
```sh
sudo apt install MYPACK
sudo apt install ./MYPACK.deb
```


### Remove packages
```sh
sudo apt remove MYPACK

# Remove all files
sudo apt remove --purge MYPACK 
```
### List all packages installed
```sh
dpkg --get-selections
dpkg --get-selections *MYPACK*
```

