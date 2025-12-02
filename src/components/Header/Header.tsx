import React from "react";
import { useHeader } from "../Context/HeaderContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { name, setName } = useHeader();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");

    setName("");
    navigate("/login");
  };

  // Scroll to section by ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        background: "#0d6efd",
        padding: "10px 20px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      {/* Left: Welcome */}
      <h3 style={{ margin: 0 }}>Welcome {name || "Guest"} 👋</h3>

      {/* Middle: Navigation Menu */}
      <div style={{ display: "flex", gap: "20px" }}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("home")}
        >
          Home
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("about")}
        >
          About
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("contact")}
        >
          Contact Us
        </span>
      </div>

      {/* Right: Logout */}
      <button
        onClick={handleLogout}
        style={{
          background: "#dc3545",
          border: "none",
          color: "white",
          padding: "6px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
