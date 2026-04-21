export default function MessageBubble({ msg }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          background: "#dcf8c6",
          padding: "10px",
          margin: "5px",
          borderRadius: "10px",
          maxWidth: "60%",
        }}
      >
        {/* Text message */}
        {msg.text && <p>{msg.text}</p>}

        {/* Image message */}
        {msg.image && (
          <img src={msg.image} alt="sent" width="120" />
        )}

        {/* Time */}
        <div style={{ fontSize: "10px", textAlign: "right" }}>
          {msg.time}
        </div>
      </div>
    </div>
  );
}