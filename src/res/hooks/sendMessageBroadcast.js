export function sendMessageBroadcast(message,socket,callback) {
    fetch('/api/message/broadcast', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message:message})
    })
    .then(res => res.json())
    .then(json => {
        socket.on('broadcast' , (message) => {
            callback(message,null);
        });
    })
    .catch(err => {
        console.log(err);
        callback(null,err.message);
    });
}