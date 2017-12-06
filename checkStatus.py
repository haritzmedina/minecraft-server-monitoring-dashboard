import datetime
from mcstatus import MinecraftServer
serverURI = "minecraft.haritzmedina.com" # Change with your own server URL or IP
server = MinecraftServer.lookup(serverURI)
now = datetime.datetime.utcnow().isoformat()
status = server.status()

print("{0}\t{1}\t{2}".format(status.players.online, status.latency, now))