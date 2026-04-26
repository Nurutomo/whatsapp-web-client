import React, { useState } from "react";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";
import { useUsersContext } from "../../context/usersContext";
import ContactItem from "../ContactItem";
import SidebarHeader from "../SidebarHeader";

function Sidebar() {
    const { users } = useUsersContext();
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleContactClick = (userId: number): void => {
        history.push(`/chat/${userId}`);
    };

    return (
        <div className="sidebar">
            <SidebarHeader />
            <div className="sidebar__search-container">
                <div className="sidebar__search-wrapper">
                    <div className="sidebar__search-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search or start new chat"
                        className="sidebar__search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="sidebar__contacts">
                {filteredUsers.map((user) => (
                    <ContactItem
                        key={user.id}
                        user={user}
                        onClick={() => handleContactClick(user.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
