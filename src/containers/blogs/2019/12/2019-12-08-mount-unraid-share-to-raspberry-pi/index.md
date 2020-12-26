---
title: "Mount UnRaid Share to Raspberry PI"
date: "2019-12-08"
---

## 1\. Update

sudo apt-get update -y && sudo apt-get upgrade -y

## 2\. Install cifs-utils

sudo apt install samba samba-common-bin smbclient cifs-utils

 

## 2\. Create Mount Point

sudo mount.cifs //<Unraid IP>/appdata /home/pi/Documents/unraid\_appdata -o user=<username for share>

![](images/Capture.png)
