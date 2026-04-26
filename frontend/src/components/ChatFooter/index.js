import React, { useState } from "react";
import "./ChatFooter.css";

function ChatFooter({ onSendMessage }) {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message.trim());
            setMessage("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="chat-footer">
            <div className="chat-footer__icons chat-footer__icons--left">
                <button className="chat-footer__icon-btn" title="Emoji">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.962 1.44 1.962zm-3.165 7.070c.875.239 1.78.38 2.697.41l-.007-.008c-.016-.012-.018-.05.008-.049.165.007.329.011.497.011 3.39 0 6.338-1.638 8.117-4.131.094-.131.069-.306-.053-.405-.032-.026-.07-.04-.108-.04-.088 0-.178.04-.234.114C15.393 16.95 12.659 18.45 9.611 18.45c-1.122 0-2.195-.187-3.187-.533a.22.22 0 0 0-.062-.009c-.102 0-.207.062-.236.162-.036.12.033.246.155.284l-.003.002zm.006-.14l.003-.002-.003.002zm.01.046c-.002.004-.004.008-.004.012l.004-.012zm9.865-9.56c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.962 1.44 1.962zm-1.511 1.033a.206.206 0 0 0-.159.073c-.18.227-.387.427-.613.593a.215.215 0 0 0-.081.199.204.204 0 0 0 .138.158 5.218 5.218 0 0 0 1.527.234c2.46 0 4.57-1.427 5.59-3.51.012-.025.018-.052.018-.08a.202.202 0 0 0-.202-.202.198.198 0 0 0-.18.115 4.83 4.83 0 0 1-4.38 2.798c-.22 0-.434-.02-.641-.059l-.017-.319zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                    </svg>
                </button>
                <button className="chat-footer__icon-btn" title="Attach file">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.966 2.585 1.06 3.605.198l5.197-5.197c.41-.41.409-1.073 0-1.483-.409-.41-1.073-.41-1.483 0l-4.476 4.476c-.163.163-.494.185-.647.031-.301-.301-.247-.821.016-1.084l7.916-7.916c.487-.487 1.254-.518 1.735-.037.245.247.371.58.341.921-.031.345-.194.657-.439.902l-9.548 9.548a3.474 3.474 0 0 1-2.471 1.024 3.474 3.474 0 0 1-2.472-1.024 3.474 3.474 0 0 1-1.024-2.47 3.474 3.474 0 0 1 1.024-2.47l8.943-8.944c.655-.654.655-1.71-.001-2.364-.655-.654-1.71-.655-2.364 0l-8.941 8.941C2.397 12.645 1.816 14.047 1.816 15.556z"/>
                    </svg>
                </button>
            </div>
            <form className="chat-footer__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="chat-footer__input"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </form>
            <div className="chat-footer__icons chat-footer__icons--right">
                {message.trim() ? (
                    <button className="chat-footer__icon-btn chat-footer__send-btn" onClick={handleSubmit} title="Send">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/>
                        </svg>
                    </button>
                ) : (
                    <button className="chat-footer__icon-btn" title="Voice message">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.468 2.35 8.468 4.35v7.061c0 2.001 1.53 3.531 3.531 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2.001z"/>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}

export default ChatFooter;
