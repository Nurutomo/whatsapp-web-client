import React, { useState } from "react";
import "./ChatHeader.css";

function ChatHeader({ user }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="chat-header">
            <div className="chat-header__user">
                <div className="chat-header__avatar">
                    <svg viewBox="0 0 212 212" width="40" height="40">
                        <path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"/>
                        <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-6.837 72.352 72.352 0 0 0-9.561-4.059c-1.086-.345-2.177-.684-3.28-.987-1.1-.297-2.208-.578-3.323-.833a72.416 72.416 0 0 0-3.36-.645 68.831 68.831 0 0 0-5.103-.531 71.593 71.593 0 0 0-2.698-.104 71.63 71.63 0 0 0-2.745.068 68.816 68.816 0 0 0-5.133.512 67.62 67.62 0 0 0-3.365.64c-1.113.255-2.219.537-3.318.833-1.105.302-2.196.641-3.284.984a72.358 72.358 0 0 0-9.551 4.057 72.455 72.455 0 0 0-10.196 6.836 71.077 71.077 0 0 0-5.921 5.47 70.1 70.1 0 0 0-3.18 3.527 67.567 67.567 0 0 0-2.605 3.299 63.615 63.615 0 0 0-2.062 2.958 113.35 113.35 0 0 0 13.878 15.28 115.615 115.615 0 0 0 14.552 11.744 113.074 113.074 0 0 0 16.163 8.312c5.701 2.351 11.69 4.066 17.894 5.064a115.62 115.62 0 0 0 19.244 1.612c6.545 0 12.965-.541 19.221-1.612a113.09 113.09 0 0 0 17.891-5.064 113.082 113.082 0 0 0 16.163-8.312 115.618 115.618 0 0 0 14.551-11.744 113.35 113.35 0 0 0 13.878-15.28zM106.288 143.9c-8.32 0-16.055-2.059-22.814-5.673-6.76-3.614-12.553-8.735-16.887-14.896-4.333-6.162-7.138-13.282-8.157-20.89-.504-3.802-.756-7.672-.756-11.607 0-3.812.253-7.563.756-11.225 1.019-7.607 3.824-14.607 8.157-20.656 4.334-6.049 10.127-10.989 16.887-14.449 6.759-3.46 14.494-5.375 22.814-5.375 8.32 0 16.055 1.915 22.814 5.375 6.759 3.46 12.552 8.4 16.886 14.449 4.333 6.049 7.138 13.049 8.157 20.656.503 3.662.756 7.413.756 11.225 0 3.935-.253 7.805-.756 11.607-1.019 7.608-3.824 14.728-8.157 20.89-4.334 6.161-10.127 11.282-16.886 14.896-6.759 3.614-14.494 5.673-22.814 5.673z"/>
                    </svg>
                </div>
                <div className="chat-header__info">
                    <p className="chat-header__name">{user.name}</p>
                    <p className="chat-header__status">
                        {user.typing ? "typing..." : "click here for contact info"}
                    </p>
                </div>
            </div>
            <div className="chat-header__icons">
                <button className="chat-header__icon-btn" title="Video call">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M15.9 14.3H16c.9-1.1 1.4-2.4 1.4-3.8-.1-3.4-2.9-6.1-6.3-6.1s-6.2 2.8-6.2 6.2 2.8 6.2 6.2 6.2c1.4 0 2.7-.5 3.8-1.4v.1l3.8 3.8 1.4-1.4-4.2-3.6zm-4.8 1c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
                    </svg>
                </button>
                <button className="chat-header__icon-btn" title="Search">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"/>
                    </svg>
                </button>
                <div className="chat-header__menu-container">
                    <button
                        className="chat-header__icon-btn"
                        title="Menu"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"/>
                        </svg>
                    </button>
                    {showMenu && (
                        <div className="chat-header__menu">
                            <button onClick={() => setShowMenu(false)}>Contact info</button>
                            <button onClick={() => setShowMenu(false)}>Select messages</button>
                            <button onClick={() => setShowMenu(false)}>Mute notifications</button>
                            <button onClick={() => setShowMenu(false)}>Disappearing messages</button>
                            <button onClick={() => setShowMenu(false)}>Clear messages</button>
                            <button onClick={() => setShowMenu(false)}>Delete chat</button>
                            <button onClick={() => setShowMenu(false)}>Report</button>
                            <button onClick={() => setShowMenu(false)}>Block</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;
