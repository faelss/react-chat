function broadcastMessage(payload, io) {
  io.emit("message::broadcast", payload);
}


module.exports = {
  broadcastMessage,
}