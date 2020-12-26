---
title: "UnRaid - Array stuck spinning down"
date: "2020-01-30"
---

1. SSH into unraid as root
    1. ps -ef | grep /mnt/user
2. The output should look something like this.

![](images/pic-1024x87.png)

3\. You are now going want to kill those processes

1. 1. kill <pid>
