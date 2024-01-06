import Stomp from 'stompjs';
import SockJs from 'sockjs-client';

let stompClient = null;

const WebsocketService = {
    connect: async (callback) => {
        const socket = await new SockJs("http://localhost:8080/websocket-demo");
        stompClient = await Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            setTimeout(function () {
                stompClient.subscribe("/topic/doc", function (message) {
                    callback(JSON.parse(message.body));
                });
            }, 500);
        });
    },
    sendMessage: async (message) => {
        if (stompClient && stompClient.connected) {
            await stompClient.send('/app/doc', {}, JSON.stringify(message));
        } else {
            console.error('WebSocket connection is not established.');
        }
    }
}

export default WebsocketService;