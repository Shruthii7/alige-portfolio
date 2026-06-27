"use client";

export default function HostelDetails({
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
          🏠 Joint Hostel Secretary
        </h1>

        <p
          style={{
            color: "#c084fc",
            marginBottom: "25px",
            fontSize: "22px",
          }}
        >
          Girls Hostel • NIT Surat
        </p>

        <h2 style={{ marginBottom: "10px" }}>
          Leadership Overview
        </h2>

        <p
          style={{
            color: "#d1d5db",
            lineHeight: "1.8",
          }}
        >
          Served as the Joint Hostel Secretary, acting as a bridge
          between hostel residents and the administration. Worked to
          improve student welfare, coordinate hostel activities, resolve
          concerns, and ensure smooth hostel management.
        </p>

        <h2
          style={{
            marginTop: "35px",
            marginBottom: "15px",
          }}
        >
          Responsibilities
        </h2>

        <div
          style={{
            lineHeight: "2",
            color: "#d1d5db",
          }}
        >
          ✓ Represented hostel students and communicated their concerns to the administration.
          <br />
          ✓ Coordinated with wardens and hostel staff to resolve day-to-day issues.
          <br />
          ✓ Assisted in organizing hostel events, awareness programs and student activities.
          <br />
          ✓ Helped maintain discipline, communication and overall hostel operations.
          <br />
          ✓ Supported initiatives that enhanced student welfare and hostel life.
        </div>

        <div
          style={{
            marginTop: "35px",
            padding: "25px",
            borderRadius: "20px",
            background: "rgba(255,255,255,.05)",
          }}
        >
          <h3 style={{ marginBottom: "12px" }}>
            What I Gained
          </h3>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            Developed leadership, communication, conflict resolution,
            teamwork, responsibility, administration and organizational
            skills while representing students and working closely with
            institute authorities to improve hostel management.
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
            background: "linear-gradient(90deg,#60a5fa,#c084fc)",
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