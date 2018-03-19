const WebSocket = require('ws');
const GameController = require('./gameController');
const wss = new WebSocket.Server({ port: 8080 });

const soc = {
    A: null,
    B: null,
}

const listeners = new Set();

function messageHandler(data){
    listeners.forEach(listener => listener(data));
}

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        const data = JSON.parse(message);
        console.log(data);
        switch(data.type){
            case 'HELLO':
            soc[data.player] = ws;
            case 'NEW_GAME':
            soc[data.player] = ws;
            const game = new GameController();
            exports.addListener(game.getListener());
            break;
            default:
            messageHandler(data);
            break;
        }
    });

});
exports.addListener =(listener) => {
    listeners.add(listener);
}

exports.removeListener = (listener) => {
    listeners.delete(listener);
}

exports.sendMessage = (playerCode,message) => {
    soc[player].send(JSON.stringify(message));
}