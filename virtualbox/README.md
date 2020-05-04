### Install in Ubuntu

```sh
sudo apt install virtualbox
```

### Install Guest Additions ISO

```sh
sudo apt install virtualbox-guest-additions-iso
```

### Install Support to USB Ports

```sh
# Install package
sudo apt install virtualbox-ext-pack

# Add user to group "vboxusers"
sudo usermod USERNAME -a -G vboxusers

# Show all groups of user
sudo groups USERNAME
```
