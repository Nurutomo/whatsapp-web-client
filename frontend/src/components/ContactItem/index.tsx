import React from "react";
import "./ContactItem.css";
import { useRouteMatch } from "react-router-dom";
import { User, Message } from "../../types";

interface ContactItemProps {
    user: User;
    onClick: () => void;
}

function ContactItem({ user, onClick }: ContactItemProps) {
    const match = useRouteMatch(`/chat/${user.id}`);
    const isActive = !!match;
    const isTyping = user.presence === "composing";

    const getLastMessage = (): Message | undefined => {
        const messageGroups = Object.values(user.messages);
        if (messageGroups.length === 0) return undefined;
        const lastGroup = messageGroups[messageGroups.length - 1];
        return lastGroup[lastGroup.length - 1];
    };

    const lastMessage = getLastMessage();

    return (
        <div
            className={`contact-item ${isActive ? "contact-item--active" : ""}`}
            onClick={onClick}
        >
            <div className="contact-item__avatar">
                {user.imgUrl ? (
                    <img src={user.imgUrl} alt={user.name} />
                ) : (
                    <svg viewBox="0 0 212 212" width="49" height="49">
                        <path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"/>
                        <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-6.837 72.352 72.352 0 0 0-9.561-4.059c-1.086-.345-2.177-.684-3.28-.987-1.1-.297-2.208-.578-3.323-.833a72.416 72.416 0 0 0-3.36-.645 68.831 68.831 0 0 0-5.103-.531 71.593 71.593 0 0 0-2.698-.104 71.63 71.63 0 0 0-2.745.068 68.816 68.816 0 0 0-5.133.512 67.62 67.62 0 0 0-3.365.64c-1.113.255-2.219.537-3.318.833-1.105.302-2.196.641-3.284.984a72.358 72.358 0 0 0-9.551 4.057 72.455 72.455 0 0 0-10.196 6.836 71.077 71.077 0 0 0-5.921 5.47 70.1 70.1 0 0 0-3.18 3.527 67.567 67.567 0 0 0-2.605 3.299 63.615 63.615 0 0 0-2.062 2.958 113.35 113.35 0 0 0 13.878 15.28 115.615 115.615 0 0 0 14.552 11.744 113.074 113.074 0 0 0 16.163 8.312c5.701 2.351 11.69 4.066 17.894 5.064a115.62 115.62 0 0 0 19.244 1.612c6.545 0 12.965-.541 19.221-1.612a113.09 113.09 0 0 0 17.891-5.064 113.082 113.082 0 0 0 16.163-8.312 115.618 115.618 0 0 0 14.551-11.744 113.35 113.35 0 0 0 13.878-15.28zM106.288 143.9c-8.32 0-16.055-2.059-22.814-5.673-6.76-3.614-12.553-8.735-16.887-14.896-4.333-6.162-7.138-13.282-8.157-20.89-.504-3.802-.756-7.672-.756-11.607 0-3.812.253-7.563.756-11.225 1.019-7.607 3.824-14.607 8.157-20.656 4.334-6.049 10.127-10.989 16.887-14.449 6.759-3.46 14.494-5.375 22.814-5.375 8.32 0 16.055 1.915 22.814 5.375 6.759 3.46 12.552 8.4 16.886 14.449 4.333 6.049 7.138 13.049 8.157 20.656.503 3.662.756 7.413.756 11.225 0 3.935-.253 7.805-.756 11.607-1.019 7.608-3.824 14.728-8.157 20.89-4.334 6.161-10.127 11.282-16.886 14.896-6.759 3.614-14.494 5.673-22.814 5.673z"/>
                    </svg>
                )}
            </div>
            <div className="contact-item__content">
                <div className="contact-item__top">
                    <span className="contact-item__name">{user.name}</span>
                    <span className="contact-item__time">
                        {lastMessage ? lastMessage.time : ""}
                    </span>
                </div>
                <div className="contact-item__bottom">
                    <div className="contact-item__message">
                        {isTyping ? (
                            <span className="contact-item__typing">typing...</span>
                        ) : lastMessage ? (
                            <>
                                {lastMessage.sender === null && (
                                    <span className="contact-item__status">
                                        {lastMessage.status === "read" ? (
                                            <svg viewBox="0 0 16 15" width="16" height="15" className="status-icon status-icon--read">
                                                <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                                            </svg>
                                        ) : lastMessage.status === "delivered" ? (
                                            <svg viewBox="0 0 16 15" width="16" height="15" className="status-icon">
                                                <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 16 15" width="16" height="15" className="status-icon">
                                                <path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                                            </svg>
                                        )}
                                    </span>
                                )}
                                <span>{lastMessage.content || "📷 Photo"}</span>
                            </>
                        ) : null}
                    </div>
                    {user.unread > 0 && (
                        <span className="contact-item__unread">{user.unread}</span>
                    )}
                    {user.pinned && !user.unread && (
                        <span className="contact-item__pinned">
                            <svg viewBox="0 0 16 16" width="14" height="14">
                                <path fill="currentColor" d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                            </svg>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactItem;
