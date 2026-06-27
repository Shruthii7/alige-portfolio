"use client";

export default function MediWiseDetails({
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
          💊 MediWise
        </h1>

        <p
          style={{
            color: "#c084fc",
            marginBottom: "25px",
            fontSize: "22px",
          }}
        >
          Medicine Interaction Checker
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
          Developed a medicine interaction checker that helps users
          identify possible interactions between medicines, promoting
          safer medication usage through an intuitive web application.
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
          ✓ Built the application using Next.js and React.
          <br />
          ✓ Implemented medicine search and interaction logic.
          <br />
          ✓ Designed a clean and responsive user interface.
          <br />
          ✓ Improved application reliability through debugging and testing.
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
            Strengthened skills in frontend development, debugging,
            logical problem solving, responsive design and developing
            healthcare-focused web applications.
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