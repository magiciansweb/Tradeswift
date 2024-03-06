"use client";
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "80vh", marginTop: '20px' }}>
      <PrettyChatWindow
        projectId="97e7a9ac-37be-4fc2-9045-fa0e2ebaaa65"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};
export default ChatsPage;
