const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const bodyParser = require("body-parser");
const socketActions = require("./socketActions");
const users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

io.on("connection", (socket) => {
  
  const { broadcastMessage } = socketActions;

  users.push({ id: users.length + 1 });

  socket.join("teste", () => {
    io.to("teste").emit("user::setData", users.slice(-1));
  });

  socket.on("message::broadcast", (payload) => broadcastMessage(payload, io));

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(8000, () => {
  console.log("listening on *:8000");
});
