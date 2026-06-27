"use client";

export default function ProjectDetailsModal({
  title,
  section1,
  section2Title,
  section2,
  section3Title,
  section3,
  onClose,
}: {
  title: string;
  section1: string;
  section2Title: string;
  section2: string[];
  section3Title: string;
  section3: string;
  onClose: () => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          width: "850px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "rgba(8,12,30,.97)",
          borderRadius: "25px",
          padding: "40px",
          color: "white",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,.08)",
            color: "white",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <h1>{title}</h1>

        <h2 style={{ color: "#c084fc" }}>Overview</h2>

        <p style={{ lineHeight: 1.8 }}>{section1}</p>

        <h2 style={{ color: "#c084fc", marginTop: 30 }}>
          {section2Title}
        </h2>

        <ul>
          {section2.map((item, index) => (
            <li key={index} style={{ marginBottom: 12 }}>
              ✓ {item}
            </li>
          ))}
        </ul>

        <h2 style={{ color: "#c084fc", marginTop: 30 }}>
          {section3Title}
        </h2>

        <p style={{ lineHeight: 1.8 }}>{section3}</p>
      </div>
    </div>
  );
}