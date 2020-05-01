### Install RVM

Step 1: Install public key

```sh
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

Step 2: Download and install

```sh
curl -sSL https://get.rvm.io | bash -s stable
```

### Problem with Ruby and PostgreSQL (gem 'pg')

```sh
sudo apt-get install libpq-dev
```

Important links:

- https://rvm.io/rvm/install
- https://www.treinaweb.com.br/blog/gerenciar-versoes-do-ruby-com-rvm/
- https://rvm.io/integration/gnome-terminal
- https://stackoverflow.com/questions/28253681/you-need-to-install-postgresql-server-dev-x-y-for-building-a-server-side-extensi
