import { createContext, useContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

export interface ServerToClientEvents {
    fetch_response: (data: { userId: number; response: string }) => void;
    start_typing: (data: { userId: number }) => void;
    stop_typing: (data: { userId: number }) => void;
}

export interface ClientToServerEvents {
    fetch_response: (data: { userId: number }) => void;
}

export type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || "http://localhost:5000";

const socket: AppSocket = io(SOCKET_URL, { transports: ["websocket", "polling"] });

const SocketContext = createContext<AppSocket | undefined>(undefined);

const useSocketContext = (): AppSocket => {
    const ctx = useContext(SocketContext);
    if (!ctx) throw new Error("useSocketContext must be used within SocketProvider");
    return ctx;
};

interface SocketProviderProps {
    children: ReactNode;
}

const SocketProvider = ({ children }: SocketProviderProps) => {
    return (
        <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    );
};

export { useSocketContext, SocketProvider };
