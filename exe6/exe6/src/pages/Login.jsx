import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const hasNumbers = /\d/.test(username);
    const isTooShort = username.length < 2;

    if (hasNumbers || isTooShort) {
      navigate("/");
    } else {
      setError("");

      navigate("/all-recipes", { state: { loggedUser: username } });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", direction: "rtl" }}>
      <h2> התחברות</h2>

      <div>
        <input
          type="text"
          placeholder="הכנס שם משתמש"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          היכנס
        </button>
      </div>

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
    </div>
  );
}
