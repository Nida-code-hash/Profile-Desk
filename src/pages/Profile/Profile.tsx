import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHeader } from "../../components/Context/HeaderContext";

// Fully typed styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
  },
  card: {
    width: "450px",
    padding: "30px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 0 18px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#0d6efd",
  },
  row: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "6px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  btn: {
    width: "100%",
    padding: "12px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  devBtn: {
    flex: 1,
    padding: "10px",
    background: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

const ProfilePage: React.FC = () => {
  const { name, setName } = useHeader(); // Header context
  const [user, setUser] = useState<User | null>(null);
  const [fullName, setFullName] = useState<string>("");

  // Load user data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      const parsed: User = JSON.parse(stored);
      setUser(parsed);
      setFullName(parsed.fullName);
    }
  }, []);

  // Log context whenever it updates (for dev)
  useEffect(() => {
    console.log("HeaderContext name updated:", name);
  }, [name]);

  // Handle profile update API
  const handleUpdate = async () => {
    if (!user) return;
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        "https://cloudlearner.duckdns.org:1124/api/v1/user/updateUser",
        {
          id: user.id,
          fullName: fullName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updatedUser: User = response.data.data;

      // Update LocalStorage
      localStorage.setItem("userData", JSON.stringify(updatedUser));

      // Update context
      setName(updatedUser.fullName);

      // Update local state
      setUser(updatedUser);

      alert("Profile updated successfully!");
    } catch (err: any) {
      console.error("Update Error:", err.response?.data);
      alert(err.response?.data?.message || "Update failed");
    }
  };

  // Development buttons
  const logLocalStorage = () => {
    const stored = localStorage.getItem("userData");
    console.log("LocalStorage userData:", stored ? JSON.parse(stored) : null);
  };

  const logContextValue = () => {
    // Read latest context dynamically
    const { name } = useHeader();
    console.log("HeaderContext name:", name);
  };

  if (!user) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading Profile...</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Profile</h2>

        {/* Full Name */}
        <div style={styles.row}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Email */}
        <div style={styles.row}>
          <label style={styles.label}>Email</label>
          <input type="text" value={user.email} disabled style={styles.input} />
        </div>

        {/* Role */}
        <div style={styles.row}>
          <label style={styles.label}>Role</label>
          <input type="text" value={user.role} disabled style={styles.input} />
        </div>

        <button style={styles.btn} onClick={handleUpdate}>
          Update Profile
        </button>

        {/* Development buttons */}
        <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
          <button style={styles.devBtn} onClick={logLocalStorage}>
            Log LS Value
          </button>
          <button style={styles.devBtn} onClick={logContextValue}>
            Log Context Value
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
