"use client";

export default function FinSightDetails({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <>
      {/* Background */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(6px)",
          zIndex: 999,
        }}
      />

      {/* Popup */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "850px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "rgba(10,15,30,0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "40px",
          color: "white",
          zIndex: 1000,
        }}
      >
        {/* Close */}
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
          📊 FinSight AI
        </h1>

        <p
          style={{
            color: "#c084fc",
            marginBottom: "25px",
            fontSize: "22px",
          }}
        >
          AI Financial Dashboard
        </p>

        <h2 style={{ marginBottom: "10px" }}>
          Project Overview
        </h2>

        <p
          style={{
            color: "#d1d5db",
            lineHeight: "1.8",
          }}
        >
          Built an AI-powered financial analysis dashboard that allows
          users to upload financial statements and receive business
          insights, ratio analysis, visualizations, forecasts and
          AI-generated recommendations through an interactive web
          interface.
        </p>

        <h2
          style={{
            marginTop: "35px",
            marginBottom: "15px",
          }}
        >
          My Contribution
        </h2>

        <div
          style={{
            lineHeight: "2",
            color: "#d1d5db",
          }}
        >
          ✓ Designed and developed the frontend using Next.js and React.
          <br />
          ✓ Created a responsive glassmorphism-based UI.
          <br />
          ✓ Integrated file upload and dashboard layout.
          <br />
          ✓ Worked on financial metrics visualization and user
          experience.
        </div>

        <div
          style={{
            marginTop: "35px",
            padding: "25px",
            borderRadius: "20px",
            background: "rgba(255,255,255,.05)",
          }}
        >
          <h3
            style={{
              marginBottom: "12px",
            }}
          >
            Key Takeaways
          </h3>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            Developed practical experience in frontend development,
            UI/UX design, responsive layouts, data visualization,
            component architecture and building data-driven web
            applications using Next.js.
          </p>
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: "35px",
            padding: "14px 28px",
            borderRadius: "14px",
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(90deg,#60a5fa,#c084fc)",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          ← Back
        </button>
      </div>
    </>
  );
}