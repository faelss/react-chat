const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const route = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

io.on('connection' , (socket) => {
  
  app.socket = socket;
  route(app);

  console.log('user connected');

  socket.on('disconnect' , () => {
      console.log('user disconnected');
  });

});


http.listen(8000, () => {
  console.log('listening on *:8000');
});