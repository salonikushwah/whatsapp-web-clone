const chatReducer = (state, action) => {
  switch (action.type) {

    // 👉 Contact select
    case "SET_CHAT":
      return {
        ...state,
        selectedChat: action.payload,
      };

    // 👉 Message send
    case "SEND_MESSAGE":
      const chat = state.selectedChat;

      // agar chat select nahi hai to kuch mat karo
      if (!chat) return state;

      const newMessage = {
        id: Date.now(),
        text: action.payload.text,
        image: action.payload.image,
        time: action.payload.time || new Date().toLocaleTimeString(),
      };

      return {
        ...state,
        messages: {
          ...state.messages,
          [chat]: [
            ...(state.messages[chat] || []),
            newMessage,
          ],
        },
      };

    default:
      return state;
  }
};

export default chatReducer;