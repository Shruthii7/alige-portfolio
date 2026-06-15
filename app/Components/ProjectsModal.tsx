"use client";
import { useState } from "react";
export default function ProjectsModal({
  onClose,
}: {
  onClose: () => void;
}) {
    const [selectedProject, setSelectedProject] =
  useState<string | null>(null);
  if (selectedProject === "iit") {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "800px",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "25px",
          color: "white",
        }}
      >
        
        <h1
        style={{
            marginBottom: "10px",
            fontSize: "30px",
            color: "#fefefe",
          }}
          >🎓 IIT Kanpur Research Internship</h1>

        <p style={{ 
            marginBottom: "20px",
            fontSize: "20px",
            color: "#c084fc" }}>
          Department of Cognitive Science
        </p>

        <div>
          <span style={skillPill}>Research</span>
          <span style={skillPill}>Analytics</span>
          <span style={skillPill}>Documentation</span>
          <span style={skillPill}>Critical Thinking</span>
        </div>

       <h3 style={{ marginTop: "25px" }}>
  Project Overview
</h3>

<p style={{ lineHeight: "1.8", color: "#d1d5db" }}>
  Worked as a Research Intern at IIT Kanpur's
  Department of Cognitive Science on a study
  investigating media polarisation, doomscrolling,
  and ingroup bias in online behaviour.
</p>

<h3 style={{ marginTop: "25px" }}>
  My Contribution
</h3>

<ul style={{ lineHeight: "2" }}>
  <li>✓ Collected and organized research data</li>
  <li>✓ Assisted in data analysis and interpretation</li>
  <li>✓ Supported literature review activities</li>
  <li>✓ Contributed to documentation and reporting</li>
</ul>

<div
  style={{
    marginTop: "25px",
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.04)",
  }}
>
  <h3>Key Takeaways</h3>

  <p>
    Developed experience in research methodology,
    analytical thinking, data interpretation,
    and academic documentation while working
    alongside researchers from IIT Kanpur.
  </p>
</div>

        <button
          onClick={() => setSelectedProject(null)}
          style={buttonStyle}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

if (selectedProject === "cdac") {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "800px",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "25px",
          color: "white",
        }}
      >
        <h1
        style={{
            marginBottom: "10px",
            fontSize: "30px",
            color: "#fefefe",
          }}
          >🛡️ C-DAC Cyber Security Internship</h1>

        <p style={{ 
            marginBottom: "20px",
            fontSize: "20px",
            color: "#c084fc" }}>
          Cyber Gyan Virtual Internship
        </p>

        <div>
          <span style={skillPill}>Security Analysis</span>
          <span style={skillPill}>Networking</span>
          <span style={skillPill}>Documentation</span>
          <span style={skillPill}>Problem Solving</span>
        </div>

        <h3 style={{ marginTop: "25px" }}>
  Project Overview
</h3>

<p style={{ lineHeight: "1.8", color: "#d1d5db" }}>
  Completed a cybersecurity internship focused on
  network security assessment and vulnerability
  identification using industry-standard tools.
</p>

<h3 style={{ marginTop: "25px" }}>
  My Contribution
</h3>

<ul style={{ lineHeight: "2" }}>
  <li>✓ Performed network reconnaissance</li>
  <li>✓ Conducted vulnerability assessments</li>
  <li>✓ Analysed security weaknesses</li>
  <li>✓ Documented findings and recommendations</li>
</ul>

<div
  style={{
    marginTop: "25px",
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.04)",
  }}
>
  <h3>Tools Used</h3>

  <p>
    Nmap • Nuclei • DNS Enumeration
  </p>
</div>

        <button
          onClick={() => setSelectedProject(null)}
          style={buttonStyle}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

if (selectedProject === "openchem") {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "800px",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "25px",
          color: "white",
        }}
      >
        <h1
        style={{
            marginBottom: "10px",
            fontSize: "30px",
            color: "#fefefe",
          }}
          >🌍 OpenChemistry Contribution</h1>

        <p style={{ 
            marginBottom: "20px",
            fontSize: "20px",
            color: "#c084fc" }}>
          Open Source Contributor
        </p>

        <div>
          <span style={skillPill}>Git</span>
          <span style={skillPill}>Documentation</span>
          <span style={skillPill}>Collaboration</span>
          <span style={skillPill}>Open Source</span>
        </div>

        <h3 style={{ marginTop: "25px" }}>
  Contribution Overview
</h3>

<p style={{ lineHeight: "1.8", color: "#d1d5db" }}>
  Contributed to the OpenChemistry open-source
  project by helping improve documentation and
  migrating archived wiki content into the
  official documentation system.
</p>

<h3 style={{ marginTop: "25px" }}>
  My Contribution
</h3>

<ul style={{ lineHeight: "2" }}>
  <li>✓ Migrated archived wiki pages</li>
  <li>✓ Improved documentation structure</li>
  <li>✓ Worked with Git and GitHub workflows</li>
  <li>✓ Collaborated with project maintainers</li>
</ul>

<div
  style={{
    marginTop: "25px",
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.04)",
  }}
>
  <h3>Impact</h3>

  <p>
    Helped improve accessibility and organization
    of project documentation for future users
    and contributors.
  </p>
</div>

        <button
          onClick={() => setSelectedProject(null)}
          style={buttonStyle}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

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
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "1100px",
          maxWidth: "90vw",
          maxHeight: "85vh",
          overflowY: "auto",
          background: "rgba(5,10,40,0.95)",
          border: "1px solid rgba(184, 118, 245, 0.3)",
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
          Projects & Experience
        </h1>

        <p
          style={{
            color: "#b8b8b8",
            marginBottom: "40px",
          }}
        >
          Research, security, and open-source projects that
          demonstrate analytical thinking and problem solving.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
       

          {/* Card 1 */}
       <div style={cardStyle}>
  <h2>🎓 IIT Kanpur Research</h2>

  <p style={subText}>
    Research Internship
  </p>
 <p style={subText}>
    (Data Analysis & Documentation)
  </p>
  <button
    onClick={() => setSelectedProject("iit")}
    style={buttonStyle}
  >
    View Details
  </button>
</div>

          {/* Card 2 */}
         <div style={cardStyle}>
  <h2>🛡️ Network Security Assessment</h2>

  <p style={subText}>
    C-DAC Cyber Security Internship
  </p>
  <p style={subText}>
    (Security Analysis Project)
  </p>

  <button
    onClick={() => setSelectedProject("cdac")}
    style={buttonStyle}
  >
    View Details
  </button>
</div>

          {/* Card 3 */}
          <div style={cardStyle}>
  <h2>🌍 Open Source Contribution</h2>

  <p style={subText}>
    OpenChemistry
  </p>
<p style={subText}>
    (Documentation Contributor)
  </p>
  <button
    onClick={() => setSelectedProject("openchem")}
    style={buttonStyle}
  >
    View Details
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(168,85,247,0.25)",
  borderRadius: "20px",
  padding: "25px",
  lineHeight: "1.8",
};
const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  background:
    "linear-gradient(90deg,#60a5fa,#c084fc)",
  color: "white",
  fontWeight: "bold",
};
const skillText = {
  color: "#60a5fa",
  marginTop: "15px",
};
const skillPill = {
  display: "inline-block",
  padding: "8px 16px",
  margin: "6px",
  borderRadius: "999px",
  background: "rgba(168,85,247,0.15)",
  border: "1px solid rgba(168,85,247,0.4)",
  color: "#d8b4fe",
  fontSize: "14px",
};

const subText = {
  color: "#c084fc",
};

