# WhatsApp Web Clone

A clone of the WhatsApp Web UI built with React and Socket.IO.

## Project Structure

```
├── frontend/     # React frontend application
└── backend/      # Node.js/Express/Socket.IO backend
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Running the Backend

```bash
cd backend
npm install
npm start
```

The backend server will start on port 5000.

### Running the Frontend

```bash
cd frontend
npm install
npm start
```

The app will open in your browser at http://localhost:3000.

## Features

- 💬 Real-time messaging with Socket.IO
- 🌙 Dark mode support (auto-detects system preference)
- 📱 Responsive layout
- ✅ Message status indicators (sent, delivered, read)
- ⌨️ Typing indicators
- 📌 Pinned chats
- 🔍 Contact search
- 👥 Group chat support

## Tech Stack

### Frontend
- React 17
- React Router DOM v5
- Socket.IO Client

### Backend
- Node.js
- Express
- Socket.IO