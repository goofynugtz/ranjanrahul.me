---
title: Error on MongoClient
description: Mongo Description
date: 31-04-2021

---

```bash
Error: queryTxt ETIMEOUT clusterzero.vho6m.mongodb.net
at QueryReqWrap.onresolve [as oncomplete] (node:dns:209:19)
```

Same error is thrown by MongoCompass Client when connecting to the Database.\n\n

It took an embarassingly long time for me to figure this out.\n
This error can be worked around by changing your DNS address to openDNS. For more info visit [here](https://use.opendns.com/ "OpenDNS")\n

### For Windows 10:
1. Open the Control Panel.
2. Click Network and Internet.
3. Click Network and Sharing Center.
4. On the left pane, click Change adapter settings.
5. Right-click the network interface connected to the internet, then click Properties.
6. Choose Internet Protocol Version 4 (TCP/IPv4).
7. Click Properties.
8. Click Use the following DNS server addresses.
9. Click Advanced.
10. Enter 208.67.222.222 and 208.67.220.220 in the DNS server fields.
11. Click OK, then click Close.
\n
Please check the link above for Linux, or Mac.