### Show current status

```sh
sudo ufw status
```

### Enable/Disable

```sh
sudo ufw enable
sudo ufw disable
```

### Allow ports

```sh
sudo ufw allow 22
sudo ufw allow 22/tcp
sudo ufw allow 22/udp
sudo ufw allow ssh
sudo ufw allow from 192.168.0.4 to any port 22
```

### Deny portas

```sh
sudo ufw deny 80
sudo ufw deny from 192.168.1.100 to any
```

### Delete rules

```sh
sudo ufw delete allow 22
sudo ufw status numbered
sudo ufw delete [NUMBER]
```

Important links:
- https://www.hostinger.com.br/tutoriais/firewall-ubuntu-ufw/
- https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands
- https://cleuber.com.br/index.php/2014/06/26/o-basico-sobre-firewall-com-ufw-em-linux
