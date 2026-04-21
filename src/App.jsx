import Sidebar from "./components/Sidebar";
import ChatBody from "./components/ChatBody";
import { ChatProvider } from "./context/ChatContext";

export default function App() {
  return (
    <ChatProvider>
      <div className="container">
        <Sidebar />
        <ChatBody />
      </div>
    </ChatProvider>
  );
}