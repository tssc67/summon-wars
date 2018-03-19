let ws;
let messageHandler = ()=>{};
function reconnect(){
    ws = new WebSocket('ws://localhost:8080');
    ws.onclose = function(){
        setTimeout(reconnect,200);
    }
    ws.onopen = function(){
        console.log("WebSocket connected");
    }
    ws.onmessage = (message) => {
        messageHandler(JSON.parse(message.data));
    };
}

function sendMessage(message){
    if(ws && ws.readyState ==  WebSocket.OPEN){
        ws.send(JSON.stringify(message));
    }
}

exports.sendMessage = sendMessage;
exports.setHandler = function(handler){
    messageHandler = handler;
}

reconnect();