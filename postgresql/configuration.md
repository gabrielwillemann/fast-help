### Connect PostgreSQL to Ruby on Rails app

```sh
$ sudo apt install libpq-dev
```

Attention: The GEM of postgreSQL is a native extension and C compiler is required

### Definir senha do usuário Postgres

```sh
$ sudo -u postgres psql
$ postgres=# \password postgres
$ Enter new password:
$ Enter it again:
```

HELP: https://serverfault.com/questions/110154/whats-the-default-superuser-username-password-for-postgres-after-a-new-install

### Access from others IP's

```sh
$ sudo vim /etc/postgresql/10/main/pg_hba.conf
```

DANGER: host all all 0.0.0.0/0 trust

Allowed connections from others IP's

- In pg_hba.conf
  - host all all 177.85.118.22/32 md5
- In postgresql.conf
  - listen_addresses = '\*'

### Create Database

```sh
$ sudo -u postgres createdb DATABASENAME --owner=USERNAME
```

### See Databases

```sh
$ sudo -u postgres psql
$ \list
```

### See usuários

```sh
$ sudo -u postgres psql
$ \du
```

### Create usuários

```sh
$ sudo -u postgres createuser --interactive --pwprompt
```

### Backup in binary file

```sh
$ pg_dump --file="/home/FILENAME.backup" --host=localhost --dbname=DATABASENAME --username=USERNAME --password --format=c
```

### Backup plain text

```sh
$ pg_dump --file="/home/FILENAME.backup" --host=localhost --dbname=DATABASENAME --username=USERNAME --password
```

If you want no input password:

```sh
$ PGPASSWORD=123456 pg_dump --file="/home/FILENAME.backup" --host=localhost --dbname=DATABASENAME --username=USERNAME --no-password
```

### Retore backup plain text

```sh
$ psql --host=localhost --dbname=DATABASENAME --username=USERNAME --password --file=/home/FILENAME.backup
```

### Transfer backup through ssh

```sh
$ scp root@192.168.1.1:/home/FILENAME.backup /home
```

OR

```sh
$ scp /home/FILENAME.backup root@192.168.1.1:/home
```

Important links:

- Linux: https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh
- Windows (PSCP): https://www.binbert.com/blog/2011/04/secure-file-transfer-from-windows-to-linux-using-rsa-key/
