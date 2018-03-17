const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const soc = {
    A: null,
    B: null,
}

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(messagse) {
        const data = JSON.parse(message);
        switch(data.type){
            case 'HELLO':
            soc[data.player] = ws;
            break;
            default:
            messageHandler(data);
        }
    });

});

exports.sendMessage = (player,message) => {
    soc[player].send(JSON.stringify(message));
}