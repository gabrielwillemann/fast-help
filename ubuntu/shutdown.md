### Shutdown computer in 1 minute

```sh
shutdown
```

### Reboot computer in 1 minute

```sh
shutdown -r
```

### Shutdown computer in 20 minute

```sh
shutdown 20
```

### Show schedule of shutdown

```sh
cat /run/systemd/shutdown/scheduled
```

### Command to cancel schedule of shutdown

```sh
shutdown -c
```
