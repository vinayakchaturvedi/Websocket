import React, {useEffect, useState} from 'react';
import WebsocketService from "./WebSocketService";

export const GoogleDoc = () => {
    const [document, setDocument] = useState({documentId: 1, content: ''});

    const [newContent, setNewContent] = useState('');


    useEffect(() => {
        WebsocketService.connect((newData) => {
            setNewContent(newData.content)
            setDocument(newData);
        })
    }, [])

    return (
        <div>
            <div>
                Data: {document.content}
            </div>
            <div>
                <input type="text" value={newContent} onChange={(e) => {
                    setNewContent(e.target.value);
                    WebsocketService.sendMessage({documentId: document.documentId, content: e.target.value})
                }}
                />

            </div>
        </div>
    )
}