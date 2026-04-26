export type MessageStatus = "sent" | "delivered" | "read" | null;

export interface Message {
    content: string;
    sender: number | null;
    time: string;
    status: MessageStatus;
    image?: boolean;
}

export interface MessageGroups {
    [date: string]: Message[];
}

export interface User {
    id: number;
    profile_picture: string | null;
    name: string;
    phone_number: string | null;
    whatsapp_name: string | null;
    unread: number;
    messages: MessageGroups;
    group: boolean;
    pinned: boolean;
    typing: boolean;
}
