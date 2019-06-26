class Functions {

    static broadcastMessage(req, res, next) {
        req.app.socket.emit('broadcast',req.body.message);
        res.send({response:'ok'});
    }

}

module.exports = Functions;