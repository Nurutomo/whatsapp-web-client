import React, { useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { useUsersContext } from "../../context/usersContext";
import ChatHeader from "../../components/ChatHeader";
import ChatBody from "../../components/ChatBody";
import ChatFooter from "../../components/ChatFooter";

function Chat() {
    const { id } = useParams();
    const { users, setUserAsUnread, addNewMessage } = useUsersContext();
    const user = users.find((u) => u.id === parseInt(id));

    useEffect(() => {
        if (user) {
            setUserAsUnread(user.id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (!user) return null;

    return (
        <div className="chat">
            <ChatHeader user={user} />
            <ChatBody user={user} />
            <ChatFooter user={user} onSendMessage={(msg) => addNewMessage(user.id, msg)} />
        </div>
    );
}

export default Chat;
