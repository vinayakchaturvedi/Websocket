/*
import React, {useEffect, useState} from 'react';
import WebsocketService from "./WebSocketService";

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newName, setNewName] = useState('');
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        WebsocketService.connect((message) => {
            setMessages([...messages, message]);
        })
    }, [messages])

    const handleSendMessage = () => {
        WebsocketService.sendMessage({from: newName, text: newMessage})
    }

    return (
        <div>
            <div>
                {
                    messages.map((msg, index) => {
                        return <div key={index}>
                            {msg.from + " - " + msg.text}
                        </div>
                    })
                }
            </div>
            <div>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}*/
