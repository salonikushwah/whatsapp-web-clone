import { createContext, useReducer } from "react";
import chatReducer from "../reducer/chatReducer";
import useLocalStorage from "../hooks/useLocalStorage";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [storedMessages, setStoredMessages] = useLocalStorage("messages", {});

  const initialState = {
    selectedChat: "Alice",
    messages: storedMessages,
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        state,
        dispatch,
        setStoredMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};