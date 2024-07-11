import { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({ noServer: true });

wsServer.on('connection', ws => {
    console.log('New client connected');
    ws.on('message', message => {
        console.log(`Received message => ${message}`);
    });
    ws.send('Hello! Message From Server!!');
});

console.log('WebSocket server is listening on ws://localhost:5500');
