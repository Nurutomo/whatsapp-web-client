import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import contacts from "../data/contacts";
import { useSocketContext } from "./socketContext";
import { User, Message } from "../types";

interface UsersContextValue {
    users: User[];
    setUserAsUnread: (userId: number) => void;
    addNewMessage: (userId: number, message: string) => void;
}

const UsersContext = createContext<UsersContextValue | undefined>(undefined);

const useUsersContext = (): UsersContextValue => {
    const ctx = useContext(UsersContext);
    if (!ctx) throw new Error("useUsersContext must be used within UsersProvider");
    return ctx;
};

interface UsersProviderProps {
    children: ReactNode;
}

const UsersProvider = ({ children }: UsersProviderProps) => {
    const socket = useSocketContext();

    const [users, setUsers] = useState<User[]>(contacts);

    const _updateUserProp = <K extends keyof User>(userId: number, prop: K, value: User[K]): void => {
        setUsers((prevUsers) => {
            const usersCopy = [...prevUsers];
            const userIndex = prevUsers.findIndex((user) => user.id === userId);
            const userObject = usersCopy[userIndex];
            usersCopy[userIndex] = { ...userObject, [prop]: value };
            return usersCopy;
        });
    };

    // Map socket 'start_typing' → Baileys WAPresence 'composing'
    const setUserAsTyping = (data: { userId: number }): void => {
        _updateUserProp(data.userId, "presence", "composing");
    };

    // Map socket 'stop_typing' → Baileys WAPresence 'available'
    const setUserAsNotTyping = (data: { userId: number }): void => {
        _updateUserProp(data.userId, "presence", "available");
    };

    const fetchMessageResponse = (data: { userId: number; response: string }): void => {
        setUsers((prevUsers) => {
            const { userId, response } = data;

            const userIndex = prevUsers.findIndex((user) => user.id === userId);
            const usersCopy: User[] = JSON.parse(JSON.stringify(prevUsers));
            const newMsgObject: Message = {
                content: response,
                sender: userId,
                time: new Date().toLocaleTimeString(),
                status: null,
            };

            usersCopy[userIndex].messages.TODAY.push(newMsgObject);

            return usersCopy;
        });
    };

    useEffect(() => {
        socket.on("fetch_response", fetchMessageResponse);
        socket.on("start_typing", setUserAsTyping);
        socket.on("stop_typing", setUserAsNotTyping);

        return () => {
            socket.off("fetch_response", fetchMessageResponse);
            socket.off("start_typing", setUserAsTyping);
            socket.off("stop_typing", setUserAsNotTyping);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket]);

    const setUserAsUnread = (userId: number): void => {
        _updateUserProp(userId, "unread", 0);
    };

    const addNewMessage = (userId: number, message: string): void => {
        const userIndex = users.findIndex((user) => user.id === userId);
        const usersCopy = [...users];
        const newMsgObject: Message = {
            content: message,
            sender: null,
            time: new Date().toLocaleTimeString(),
            status: "delivered",
        };

        usersCopy[userIndex].messages.TODAY.push(newMsgObject);
        setUsers(usersCopy);

        socket.emit("fetch_response", { userId });
    };

    return (
        <UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage }}>
            {children}
        </UsersContext.Provider>
    );
};

export { useUsersContext, UsersProvider };
