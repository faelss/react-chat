let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection' , (socket) => {
    console.log('user connected');
    socket.on('disconnect' , () => {
        console.log('user disconnected');
    });
});

http.listen(8000, () => {
  console.log('listening on *:8000');
})