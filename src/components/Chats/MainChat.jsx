"use client";
import { useState } from "react";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import "./Chat.css";
const MainChat = () => {
     const [user, setUser] = useState(undefined);
     
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
};

export default MainChat;