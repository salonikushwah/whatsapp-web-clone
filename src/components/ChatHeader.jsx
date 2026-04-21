import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export default function ChatHeader() {
  const { state } = useContext(ChatContext);

  return (
    <div
      style={{
        padding: "10px",
        background: "#202c33",
        color: "white",
      }}
    >
      {state.selectedChat}
    </div>
  );
}