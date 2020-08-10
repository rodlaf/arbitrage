const WebSocket = require('ws');
 
const ws = new WebSocket('wss://api2.poloniex.com');
 
ws.on('open', function open() {
  ws.send('{"command": "subscribe", "channel": 1002}');
});
 
ws.on('message', function incoming(data) {
    if(1){
        console.log(JSON.parse(data)[2]);
    }
});