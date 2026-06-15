"use client";

import { useState } from "react";


export default function ContactModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe67KkrKl9imYohBAXhTxh0FULqUdWm-gcbC8XPkcjr-8Ym9Q/formResponse";

  const formDataToSend = new FormData();

  formDataToSend.append(
    "entry.601166099",
    formData.name
  );

  formDataToSend.append(
    "entry.2079295657",
    formData.email
  );

  formDataToSend.append(
    "entry.2007627738",
    formData.subject
  );

  formDataToSend.append(
    "entry.582490894",
    formData.message
  );

  try {
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formDataToSend,
    });

    alert("Thank You! Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    onClose();
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
};

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "650px",
          maxWidth: "90vw",
          maxHeight: "85vh",
          overflowY: "auto",
          background: "rgba(5,10,40,0.95)",
          border: "1px solid rgba(168,85,247,0.35)",
          borderRadius: "30px",
          padding: "35px",
          color: "white",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Contact Me
        </h1>

        <p
          style={{
            color: "#b8b8b8",
            fontSize: "18px",
            marginBottom: "30px",
            lineHeight: "1.7",
          }}
        >
          I'm always open to discussing opportunities,
          internships, research collaborations,
          and interesting projects.
        </p>

        <form onSubmit={sendEmail}>
          {/* Name */}
          <div style={{ marginBottom: "20px" }}>
            <label>Name</label>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              style={inputStyle}
              required
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label>Email</label>

            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              style={inputStyle}
              required
            />
          </div>

          {/* Subject */}
          <div style={{ marginBottom: "20px" }}>
            <label>Subject</label>

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  subject: e.target.value,
                })
              }
              style={inputStyle}
              required
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "25px" }}>
            <label>Message</label>

            <textarea
              rows={6}
              placeholder="Tell me what you'd like to discuss..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              style={{
                ...inputStyle,
                resize: "none",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              background:
                "linear-gradient(90deg,#60a5fa,#c084fc)",
              color: "white",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: "8px",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  fontSize: "15px",
  outline: "none",
} as const;