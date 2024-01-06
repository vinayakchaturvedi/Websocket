package com.example.websocket.controller;

import com.example.websocket.bean.Document;
import com.example.websocket.bean.Message;
import com.example.websocket.bean.OutputMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@Slf4j
@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class WebsocketController {

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public OutputMessage send(Message message) {
        String time = new SimpleDateFormat("HH:mm:ss").format(new Date());
        log.info("From: {}, Text: {}, Time: {}", message.getFrom(), message.getText(), time);
        return OutputMessage.builder().from(message.getFrom()).text(message.getText()).time(time).build();
    }

    @MessageMapping("/doc")
    @SendTo("/topic/doc")
    public Document collaborate(Document document) {
        String time = new SimpleDateFormat("HH:mm:ss").format(new Date());
        log.info("Doc content: {}, time: {}", document.getContent(), time);
        return document;
    }
}
