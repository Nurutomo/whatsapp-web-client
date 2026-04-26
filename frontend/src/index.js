import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { UsersProvider } from "./context/usersContext";
import { SocketProvider } from "./context/socketContext";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SocketProvider>
            <UsersProvider>
                <App />
            </UsersProvider>
        </SocketProvider>
    </React.StrictMode>
);
