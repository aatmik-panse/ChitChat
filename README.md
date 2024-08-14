<h1 align="center">CHITCHAT</h1>

<p align="center">
    <img src="https://img.shields.io/github/last-commit/aatmik-panse/ChitChat?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
    <img src="https://img.shields.io/github/languages/top/aatmik-panse/ChitChat?style=flat&color=0080ff" alt="repo-top-language">
    <img src="https://img.shields.io/github/languages/count/aatmik-panse/ChitChat?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
    <em>Developed with the software and tools below.</em>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Zustand-000000.svg?style=flat&logo=Zustand&logoColor=white" alt="Zustand">

</p>
<hr>

## Overview

ChitChat is a user-friendly app for commenting.

---

## Features

- **Real-time Messaging**: Instant messaging with real-time updates.
- **Edit and Delete Comments**: Edit and delete comments with ease.
- **Sort Comments**: Sort comments by date and time.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Zustand**: A small, fast and scaleable bearbones state-management solution.

---

## Installation

To get started with ChitChat, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/aatmik-panse/ChitChat.git
   cd ChitChat
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Run the application**:

   ```sh
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173/`.

## Usage

1. **Create a new comment**:

   - Enter your name and comment in the input fields.
   - Click the `Post` button.

2. **Edit a comment**:

   - Click the `Edit` button on the comment you want to edit.
   - Edit the comment in the input field.
   - Click the `Save` button.

3. **Delete a comment**:

   - Click the `Delete` button on the comment you want to delete.

4. **Sort comments**:

   - Click the `Sort` button to sort comments by date and time.

5. **Reply to a comment**:

   - Click the `Reply` button on the comment you want to reply to.
   - Enter your name and reply in the input fields.
   - Click the `Post` button.

## Project Structure

```
ChitChat
├── public
│   ├── dp.png
├── src
│   ├── components
│   │   ├── Comment.tsx
│   ├── hooks
│   │   ├── store.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
├── .gitignore
├── package.json
├── index.html
├── README.md
├── tsconfig.json
└── vite.config.js
```

## Live Demo

You can view the live demo of the project [here](https://chit-chat-aatmiks-projects.vercel.app/).
