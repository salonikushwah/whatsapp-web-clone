import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import logo from "../assets/whatshapplogo.png";

export default function Sidebar() {
  const { dispatch } = useContext(ChatContext);

  const contacts = ["Shruti", "Muskan", "Priyanka", "Prachi", "Mani", "Mohit", "Anushka", "Ayushi", "Saloni", "Shraddha"];

  return (
    <div className="sidebar">

      {/* 🔝 Top bar with logo */}
      <div className="sidebar-header">
        <img src={logo} alt="logo" width="40" />
      </div>

      {/* 👥 Contacts */}
      {contacts.map((c, i) => (
        <div
          key={i}
          className="contact"
          onClick={() =>
            dispatch({ type: "SET_CHAT", payload: c })
          }
        >
          {c}
        </div>
      ))}
    </div>
  );
}
