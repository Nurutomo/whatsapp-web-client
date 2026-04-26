import React, { useEffect, useRef } from "react";
import "./ChatBody.css";
import { User, Message } from "../../types";

interface ChatBodyProps {
    user: User;
}

function ChatBody({ user }: ChatBodyProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [user.messages]);

    const messageGroups = user.messages;

    return (
        <div className="chat-body">
            <div className="chat-body__background">
                {Object.entries(messageGroups).map(([date, messages]) => (
                    <div key={date} className="chat-body__message-group">
                        <div className="chat-body__date-badge">
                            <span>{date}</span>
                        </div>
                        {messages.map((message: Message, index: number) => (
                            <div
                                key={index}
                                className={`message ${
                                    message.sender === null
                                        ? "message--sent"
                                        : "message--received"
                                }`}
                            >
                                {message.image ? (
                                    <div className="message__image-placeholder">
                                        <svg viewBox="0 0 24 24" width="48" height="48">
                                            <path fill="rgba(255,255,255,0.5)" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                        </svg>
                                    </div>
                                ) : (
                                    <p className="message__content">{message.content}</p>
                                )}
                                <div className="message__meta">
                                    <span className="message__time">{message.time}</span>
                                    {message.sender === null && message.status && (
                                        <span className={`message__status ${message.status === "read" ? "message__status--read" : ""}`}>
                                            {message.status === "read" ? (
                                                <svg viewBox="0 0 16 15" width="16" height="15">
                                                    <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                                                </svg>
                                            ) : message.status === "delivered" ? (
                                                <svg viewBox="0 0 16 15" width="16" height="15">
                                                    <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                                                </svg>
                                            ) : (
                                                <svg viewBox="0 0 16 15" width="16" height="15">
                                                    <path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                                                </svg>
                                            )}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
}

export default ChatBody;
