### How to Configurate SSH with Public Key Authetication in Digital Ocean

Step 1:

- In local computer, generate the private/public key
- Run command: ssh-keygen
  - Enter file name
    - For example "~/.ssh/APPNAME"
    - I recommend replace the "id_rsa" with application name
  - Enter passphrase

Step 2 - in Digital Ocean:

- When you create the Droplet, you must select "SSH-KEY" option
- Send the content of "~/.ssh/APPNAME.pub"

Step 3 - Create user

```sh
mkdir /home/USERNAME/.ssh
cp /root/.ssh/authorized_keys /home/USERNAME/.ssh
sudo chown -R USERNAME /home/USERNAME/.ssh
```

Step 4 - Disable login with password

```sh
sudo vim /etc/ssh/sshd_config
```

Change the following line:

```
PasswordAuthentication no
```

```sh
sudo service ssh restart
```

### Transfer file through SSH

```sh
scp root@192.168.1.1:/home/FILENAME.txt /home

# OR
scp /home/FILENAME.txt root@192.168.1.1:/home
```

Important links:

- https://www.digitalocean.com/community/tutorials/como-configurar-chaves-ssh-no-ubuntu-18-04-pt
- https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-freebsd-server
- https://serverfault.com/questions/670646/adding-new-user-to-aws-ec2-permission-denied-publickey
- https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server
- https://devops.ionos.com/tutorials/use-ssh-keys-with-putty-on-windows/
- https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh
- https://www.binbert.com/blog/2011/04/secure-file-transfer-from-windows-to-linux-using-rsa-key/
