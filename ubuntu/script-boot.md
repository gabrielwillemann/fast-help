### Run script in computer bootstrap

There is the service for this in Ubuntu, but is necessary to configure and enable.

Step 1 - Create file "/etc/rc.local"

```sh
printf '%s\n' '#!/bin/bash' 'exit 0' | sudo tee -a /etc/rc.local
sudo chmod +x /etc/rc.local
```

Step 2 - Content of "/etc/systemd/system/rc-local.service"

```ini
[Unit]
Description=/etc/rc.local Compatibility
ConditionPathExists=/etc/rc.local

[Service]
Type=forking
ExecStart=/etc/rc.local start
TimeoutSec=0
StandardOutput=tty
RemainAfterExit=yes
SysVStartPriority=99

[Install]
WantedBy=multi-user.target

```

Step 3 - Enable and start service:

```sh
sudo systemctl enable rc-local
sudo systemctl start rc-local.service
sudo systemctl status rc-local.service
```

Important links:

- https://www.vivaolinux.com.br/dica/rclocal-na-systemd-script-de-execucao-na-inicializacao-do-sistema
- https://www.linuxbabe.com/linux-server/how-to-enable-etcrc-local-with-systemd
