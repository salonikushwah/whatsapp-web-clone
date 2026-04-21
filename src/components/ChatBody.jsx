import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import EmptyScreen from "./EmptyScreen";
import MessageBubble from "./MessageBubble";
import { useMemo } from "react";

const messages = useMemo(() => {
  return state.messages[state.selectedChat] || [];
}, [state.messages, state.selectedChat]);

export default function ChatBody() {
  const { state, dispatch } = useContext(ChatContext);

  const messages = state.messages[state.selectedChat] || [];

  const handleSend = (msg) => {
    dispatch({ type: "SEND_MESSAGE", payload: msg });
  };

  // 👉 Agar koi chat select nahi hai
  if (!state.selectedChat) {
    return <EmptyScreen />;
  }

  return (
    <div className="chat">

      {/* 🔝 Header */}
      <ChatHeader />

      {/* 💬 Messages */}
      <div className="messages">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} />
        ))}
      </div>

      {/* ✍️ Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}