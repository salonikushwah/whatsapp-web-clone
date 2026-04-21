import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSend = () => {
    if (!text && !image) return;

    onSend({
      text,
      image,
      time: new Date().toLocaleTimeString(),
    });

    setText("");
    setImage(null);
  };

  return (
    <div className="chatInput">
      
      {/* Image Preview */}
      {image && (
        <img src={image} alt="preview" className="preview" />
      )}

      {/* Icons */}
      <div className="icons">
        😊
        <label>
          📎
          <input type="file" hidden onChange={handleImage} />
        </label>
        🎤
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Send */}
      <button onClick={handleSend}>➤</button>
    </div>
  );
}