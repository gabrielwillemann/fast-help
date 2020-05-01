### How to create a service (background) in Linux

Step 1: Create file "/etc/systemd/system/myprogram.service"

```ini
[Unit]
Description=My Program

[Service]
SyslogIdentifier=myprogram
User=myuser
Group=root
WorkingDirectory=/srv/myprogram/
ExecStart=/bin/bash /srv/myprogram/start.sh

[Install]
WantedBy=multi-user.target
```

Step 2: Create file "/srv/myprogram/start.sh"

```sh
source /home/USERNAME/.rvm/bin/rvm
export RAILS_ENV=production
rails s
```

### Commands for service

Status of service:

```sh
sudo systemctl status myprogram.service
sudo service myprogram status
```

Start service:

```sh
sudo systemctl start myprogram.service
sudo service myprogram start
sudo /etc/init.d/postgresql start
```

Stop serivce:

```sh
sudo systemctl stop myprogram.service
sudo service myprogram stop
```

Enable and disable start automatically:

```sh
sudo systemctl disable myprogram.service
sudo systemctl enable myprogram.service
```

Show all services:

```sh
service --status-all
systemctl --full --type service --all
```

### Important links:

English:

- https://www.reddit.com/r/ruby/comments/6ek4og/run_ruby_app_as_a_linux_service/
- https://hackernoon.com/making-node-js-service-always-alive-on-ubuntu-server-e20c9c0808e4

Portuguese:

- https://www.ubuntuiniciantes.com.br/2016/07/iniciar-ou-parar-servicos-no-terminal.html
- https://www.vivaolinux.com.br/artigo/Gerenciando-servicos-de-sistemas-Linux
- https://sempreupdate.com.br/como-usar-o-systemctl-para-gerenciar-servicos-do-systemd/
