import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
// import ImageResize  from 'quill-image-resize-module';
import 'react-quill/dist/quill.snow.css';
import katex from "katex";
import "katex/dist/katex.min.css";
import CustomToolbar from './CustomToolbar'
import {formats, modules} from "./Utils";
import WebsocketService from "./WebSocketService";

window.katex = katex;

// Quill.register('modules/ImageResize',ImageResize);
const GoogleEditor = () => {

    const [document, setDocument] = useState({documentId: 1, content: ''});

    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        WebsocketService.connect((newData) => {
            setNewContent(newData.content)
            setDocument(newData);
        })
    }, [])

    const handleChange = (html) => {
        setNewContent(html);
        WebsocketService.sendMessage({documentId: document.documentId, content: html})
    }

    return (
        <div style={{ margin: '50px'}}>
            <CustomToolbar/>
            <ReactQuill
                value={newContent}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                style={{height: '650px'}}
                preserveWhitespace
            />
        </div>
    )
}


export default GoogleEditor;