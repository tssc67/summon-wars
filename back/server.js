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

let game = new GameController();

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        function send(data){
            ws.send(JSON.stringify(data));
        }
        const data = JSON.parse(message);
        console.log(data);
        switch(data.type){
            case 'HELLO':
            soc[data._player] = ws;
            break;
            case 'NEW_GAME':
            soc[data._player] = ws;
            listeners.clear();
            game = new GameController();
            exports.addListener(game.getListener());
            game.phase.next(game);
            game.sendState();
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
    if(soc[playerCode]){
        message.player = playerCode;
        soc[playerCode].send(JSON.stringify(message));
    }
}
exports.addListener(game.listener);