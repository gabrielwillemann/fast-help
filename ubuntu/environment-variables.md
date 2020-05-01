### Show all environment variables

```sh
env
printenv
printenv | sort
```

### Show a environment variable

```sh
printenv MY_VAR
echo $MY_VAR
env | grep MY_VAR
```

### Search environment variables

```sh
printenv | grep -i RAILS
```

### Create a environment variable

```sh
export MY_VAR=X
```

### File for initializate variables
- /etc/bash.bashrc

Alternatives
- /etc/environment
- /etc/profile
- /etc/profile.d/
