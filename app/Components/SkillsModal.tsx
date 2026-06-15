"use client";

export default function SkillsModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "900px",
          maxWidth: "90%",
          padding: "40px",
          borderRadius: "25px",
          background: "rgba(5,10,30,0.95)",
          border: "1px solid rgba(168,85,247,0.25)",
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
            marginBottom: "20px",
            fontSize: "30px",
            color: "#c084fc",
            fontWeight: "bold",
          }}
        >
          Skills
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
            fontSize: "20px",
          }}
        >
          Technical and analytical skills developed through projects, research and self-learning.
        </p>

        {/* Floating Cloud */}
        <div
          style={{
            position: "relative",
            height: "400px",
          }}
        >
          <div className="skill skill1">Excel</div>
          <div className="skill skill2">SQL</div>
          <div className="skill skill3">Analytics</div>
          <div className="skill skill4">Power BI</div>
          <div className="skill skill5">Research</div>
          <div className="skill skill6">Problem Solving</div>
          <div className="skill skill7">Documentation</div>
          <div className="skill skill8">Communication</div>
          <div className="skill skill9">Data Visualization</div>
        </div>
      </div>
    </div>
  );
}