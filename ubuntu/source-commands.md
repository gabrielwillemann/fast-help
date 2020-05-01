### Find source of commands

```sh
# Example
which COMMAND

which ls
which echo
which rvm
```

There are commands that aren't files, can be shell functions. The following command show type of comannd, for example:

```sh
# Example
type COMMAND
type nvm
type rvm
type ls
type -a ls # All results
type -t ls # Sumary results (only word)
type -t -a ls
```
