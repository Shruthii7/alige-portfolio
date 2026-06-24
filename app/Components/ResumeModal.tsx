"use client";

export default function ResumeModal({
  onClose,
}: {
  onClose: () => void;
}) {
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
          width: "500px",
          maxWidth: "90vw",
          background: "rgba(5,10,40,0.95)",
          border: "1px solid rgba(168,85,247,0.3)",
          borderRadius: "25px",
          padding: "35px",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
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
            fontSize: "34px",
            marginBottom: "15px",
          }}
        >
          Resume
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#d1d5db",
            lineHeight: "1.7",
          }}
        >
          Resume upload is currently in progress.
          <br />
          Please check back soon.
        </p>
      </div>
    </div>
  );
}