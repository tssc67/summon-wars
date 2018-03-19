let ws;
function reconnect(){
    ws = new WebSocket('ws://localhost:8080');
    ws.onclose = function(){
        setTimeout(reconnect,200);
    }
    ws.onopen = function(){
        console.log("WebSocket connected");
    }
}

function sendMessage(message){
    if(ws && ws.readyState ==  WebSocket.OPEN){
        ws.send(JSON.stringify(message));
    }
}

exports.sendMessage = sendMessage;

reconnect();