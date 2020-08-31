### Installation PostgreSQL Server

```sh
sudo apt install postgresql
```

Important link: https://linuxconfig.org/install-postgresql-on-ubuntu-18-04-bionic-beaver

### Installation PgAdmin

New pgadmin version:

```sh
curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add

sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'

sudo apt install pgadmin4-desktop
```

Old version:

```sh
sudo apt install pgadmin3
```

### Connect Postgresql with Rails App

```sh
sudo apt install libpq-dev
```

### Disable service auto-start

```sh
sudo update-rc.d -f postgresql defaults-disabled
```

```sh
sudo update-rc.d -f postgresql disable
```
