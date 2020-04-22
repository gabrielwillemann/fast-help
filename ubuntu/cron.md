### cron
The "cron" is a service responsible for execute scheduled jobs.
```sh
sudo service cron status
```

### crontab
The "crontab" is a file responsible to schedule job. There are many "crontab" files.

In file "/etc/crontab" have jobs of system.

For edit others crontab files, is necessary to executed the follow command:
```sh
# Edit crontab from current user
crontab -e
```

```sh
# Edit crontab from other's user
crontab -u OTHER_USER -e
```

### Crontab syntax
The follow job create a file for each minute:

```sh
# m  h  dom  mon  dow   command
*/1  *  *    *    *     bash /home/my/temp/cron-test/test.sh > /home/my/temp/cron-test/log.txt 2>&1
```

```sh
# Content of test.sh
now=$(date +"%F %T")
echo "Current time : $now" >"/home/my/temp/cron-test/$now.txt"
```

