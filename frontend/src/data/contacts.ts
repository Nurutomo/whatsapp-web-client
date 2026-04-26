import getRandomSentence from "../utils/getRandomSentence";
import { User } from "../types";

const users: User[] = [
    {
        id: 1,
        imgUrl: null,
        name: "Love of my life ❤️",
        phoneNumber: "+2348123456789",
        notify: "Beyonce",
        unread: 3,
        messages: {
            "04/06/2021": [
                { content: getRandomSentence(), sender: 1, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:15", status: "read" },
                { content: getRandomSentence(), sender: 1, time: "09:11", status: null },
                { content: getRandomSentence(), sender: null, time: "09:15", status: "read" },
            ],
            YESTERDAY: [
                { content: getRandomSentence(), sender: 1, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:15", status: "read" },
                { content: getRandomSentence(), sender: 1, time: "09:11", status: null },
                { content: getRandomSentence(), sender: null, time: "09:15", status: "read" },
            ],
            TODAY: [
                { content: getRandomSentence(), sender: null, time: "08:10", status: null },
                { content: getRandomSentence(), sender: 1, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:12", status: "read" },
                { content: getRandomSentence(), sender: 1, time: "09:20", status: null },
                { content: getRandomSentence(), sender: 1, time: "09:21", status: null },
            ],
        },
        group: false,
        pinned: true,
        presence: "available",
    },
    {
        id: 2,
        imgUrl: null,
        name: "Karen Okonkwo",
        phoneNumber: "+2348123456789",
        notify: "Karen O.",
        unread: 0,
        messages: {
            "04/06/2021": [
                { content: getRandomSentence(), sender: 2, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:15", status: "read" },
            ],
            YESTERDAY: [
                { content: getRandomSentence(), sender: 2, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:15", status: "read" },
            ],
            TODAY: [
                { content: getRandomSentence(), sender: 2, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:15", status: "read" },
                { content: getRandomSentence(), sender: 2, time: "09:11", status: null },
            ],
        },
        group: false,
        pinned: false,
        presence: "available",
    },
    {
        id: 3,
        imgUrl: null,
        name: "Titilayo Bello",
        phoneNumber: "+2348123456789",
        notify: "titi123",
        unread: 0,
        messages: {
            "04/06/2021": [
                { content: getRandomSentence(), sender: 3, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:15", status: "read" },
            ],
            YESTERDAY: [
                { content: getRandomSentence(), sender: 3, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:15", status: "read" },
            ],
            TODAY: [
                { content: getRandomSentence(), sender: 3, time: "08:11", status: null },
                { content: getRandomSentence(), sender: null, time: "08:15", status: "sent" },
            ],
        },
        group: false,
        pinned: false,
        presence: "available",
    },
    {
        id: 4,
        imgUrl: null,
        name: "Adebisi Oluwatoyin",
        phoneNumber: "+2348123456789",
        notify: "Bisi_joy",
        unread: 1,
        messages: {
            TODAY: [
                { content: getRandomSentence(), sender: 4, time: "10:30", status: null },
                { content: getRandomSentence(), sender: null, time: "10:35", status: "delivered" },
                { content: getRandomSentence(), sender: 4, time: "10:40", status: null },
            ],
        },
        group: false,
        pinned: false,
        presence: "available",
    },
    {
        id: 5,
        imgUrl: null,
        name: "Tech Talk 💻",
        phoneNumber: undefined,
        notify: undefined,
        unread: 5,
        messages: {
            TODAY: [
                { content: "Has anyone tried the new framework?", sender: 3, time: "09:00", status: null },
                { content: "Yes! It's amazing.", sender: null, time: "09:05", status: "read" },
                { content: getRandomSentence(), sender: 2, time: "09:10", status: null },
                { content: getRandomSentence(), sender: 5, time: "09:15", status: null },
                { content: "We should do a project with it!", sender: null, time: "09:20", status: "delivered" },
            ],
        },
        group: true,
        pinned: true,
        presence: "available",
    },
    {
        id: 6,
        imgUrl: null,
        name: "Emeka Nwosu",
        phoneNumber: "+2348123456789",
        notify: "Emeka",
        unread: 0,
        messages: {
            YESTERDAY: [
                { content: getRandomSentence(), sender: 6, time: "18:00", status: null },
                { content: getRandomSentence(), sender: null, time: "18:05", status: "read" },
            ],
            TODAY: [
                { content: getRandomSentence(), sender: 6, time: "11:00", status: null },
            ],
        },
        group: false,
        pinned: false,
        presence: "available",
    },
];

export default users;
