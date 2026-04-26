import type { Contact, WAPresence } from "@whiskeysockets/baileys";

export type { Contact, WAPresence };

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

/**
 * Extends the Baileys Contact type with UI-specific fields.
 * - `id` is overridden to be a numeric local identifier.
 * - `name` is overridden to be required (Baileys makes it optional).
 * - `imgUrl` is overridden so `null` explicitly means no profile picture.
 * - `presence` uses Baileys WAPresence ('composing' = actively typing).
 */
export interface User extends Omit<Contact, "id" | "name" | "imgUrl"> {
    id: number;
    name: string;
    imgUrl: string | null;
    unread: number;
    messages: MessageGroups;
    group: boolean;
    pinned: boolean;
    presence: WAPresence;
}
