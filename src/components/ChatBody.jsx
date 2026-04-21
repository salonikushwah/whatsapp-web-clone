import { useContext, useMemo } from "react";
import { ChatContext } from "../context/ChatContext";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import EmptyScreen from "./EmptyScreen";
import MessageBubble from "./MessageBubble";

export default function ChatBody() {
  const { state, dispatch } = useContext(ChatContext);

  // ✅ useMemo component ke andar use karo
  const messages = useMemo(() => {
    return state.messages[state.selectedChat] || [];
  }, [state.messages, state.selectedChat]);

  const handleSend = (msg) => {
    dispatch({ type: "SEND_MESSAGE", payload: msg });
  };

  if (!state.selectedChat) {
    return <EmptyScreen />;
  }

  return (
    <div className="chat">

      <ChatHeader />

      <div className="messages">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} />
        ))}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}