# Brief description
This a simple dashboard to monitor a minecraft server. It monitors number of players and current ping to the server.
# Example 
See an example [here](https://monitoring.haritzmedina.com/minecraft/).
# Installation
It is required to install on the server side:
* Python
* [mcstatus](https://github.com/Dinnerbone/mcstatus)
* A http server, such as, nginx, express or apache

To deploy:
* Place the content in a folder of your http server.
* Add a cron task to your crontab (see as example the cron.txt). By default it is set tu run the script every 10 minutes. Adapt it as you wish.
* Remember to change the minecraft server URL in checkStatus.py

# Requirements
For mcstatus it is required minecraft version 1.7 or more
No extra dependencies are required for the dashboard.

