---
title: Windows in External SSD
description: Installing windows manually to bypass Windows 10 setup exclusion of not allowing to install on USB ports. 
date: Decemeber 06, 2022
tags: [os, ssd, windows]
---
# How to install Windows Manually

Below error is shown while trying to install windows on external SSD through USB(C) to IEEE 1394 port.
### Windows 10 setup does not support configuration of or installation to disks through a USB or IEEE 1394 port.
How to bypass it ?

```
list disk
```  
Where, x your disk number 0,1,2,3,... and so on.  
```
select disk x
```
This will format the whole disk
```
clean
``` 
```
convert gpt
```
```
create partition primary size=1024
format quick fs=ntfs label="Windows RE Tools"
assign letter="T"
set id="de94bba4-06d1-4d40-a16a-bfd50179d6ac"
gpt attributes=0x8000000000000001
```
```
create partition efi size=500
format quick fs=fat32 label="System"
assign letter="S"
```
```
create partition msr size=128
create partition primary size=256000
format quick fs=ntfs label="Windows"
assign letter="W"
```
```
create partition primary size=8192
format quick fs=ntfs label="Recovery Image"
assign letter="R"
set id="de94bba4-06d1-4d40-a16a-bfd50179d6ac"
gpt attributes=0x8000000000000001
```

**NOTE**:  
I've a 500GB SSD and partitioned it accordingly. After this I get an unallocated disk space roughly say 245 GB which I can create a partition here using "create partition primary" or later after Windows installation using Disk Management.  
```
list volume
```
Now exit diskpart by ```exit```

```
md R:\RecoveryImage
copy C:\sources\install.wim R:\RecoveryImage\install.wim
```
This would take some time. Make sure the partitions have enough space.
```
cd X:\Windows\System32
dism /Apply-Image /ImageFile:R:\RecoveryImage\install.wim /Index:1 /ApplyDir:W:\
```
```
md T:\Recovery\WindowsRE
copy W:\Windows\System32\Recovery\winre.wim T:\Recovery\WindowsRE\winre.wim
bcdboot W:\Windows /s S: /f UEFI
W:\Windows\System32\reagentc /setosimage /path R:\RecoveryImage /target W:\Windows /index 1
W:\Windows\System32\reagentc /setreimage /path T:\Recovery\WindowsRE /target W:\Windows
```