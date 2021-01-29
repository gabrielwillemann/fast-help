### Git Log

```sh
git log --pretty=oneline
git log --pretty=oneline --abbrev-commit
git log --pretty=format:"%ad %h by %an, %s" --date=iso | sort -r | less
```

### Git Remote

```sh
git remote -v
```

### Git Branch

```sh
git branch -v
git branch -vv
```

### Updating forks

```sh
git remote add upstream https://github.com/user/project.git
git fetch upstream
git checkout master
git rebase upstream/master
git push -f origin master
```

Link: https://gist.github.com/rdeavila/9618969

### Squash commits

```sh
git rebase -i HEAD~3 # Last 3 commits
```

```
pick fb554f5 This is commit 1
squash 2bd1903 This is commit 2
squash d987ebf This is commit 3
```

Link: https://www.youtube.com/watch?v=V5KrD7CmO4o

### Create branch and set-upstream

```sh
git remote add REPO_NAME https://github.com/user/REPO_NAME
git fetch REPO_NAME
git checkout -b BRANCH_NAME
git branch --set-upstream-to REPO_NAME/BRANCH_NAME
git branch -vv
git fetch
git rebase
```

### Delete local branch

```sh
git branch -d BRANCH_NAME
```

### Rename commit message

```sh
git commit --amend -m "New commit message"
git push -f
```
