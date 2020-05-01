### How to configurate SSL Certificate (Let’s Encrypt) in Nginx

Step 1: Install and configurate Nginx. Don't forget to configurate the server name with domain (`server_name example.com`)

Step 2: Add rule in firewall

```sh
sudo ufw allow 443/tcp
```

Step 3: Install Let's Encrypt
```sh
sudo add-apt-repository ppa:certbot/certbot
sudo apt update
sudo apt install python-certbot-nginx
sudo certbot --nginx -d example.com
```

Important link: https://www.digitalocean.com/community/tutorials/como-proteger-o-nginx-com-o-let-s-encrypt-no-ubuntu-18-04-pt
