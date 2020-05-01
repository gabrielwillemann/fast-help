### Create user

```sh
adduser USERNAME
addgroup USERNAME root
addgroup USERNAME admin
addgroup USERNAME sudo
```

### Show all users

```sh
getent passwd
cat /etc/passwd
```

### Show all available groups
```sh
cat /etc/group
```

### Show groups of current user
```sh
groups
```