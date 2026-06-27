"use client";
import { useState, useEffect } from "react";
import AboutModal from "./Components/AboutModal";
import SkillsModal from "./Components/SkillsModal";
import ContactModal from "./Components/ContactModal";
import ProjectsModal from "./Components/ProjectsModal";
import HobbiesModal from "./Components/HobbiesModal";
import PatternMemory from "./Components/PatternMemory";
import ResumeModal from "./Components/ResumeModal";
const isMobile =
  typeof window !== "undefined" &&
  window.innerWidth < 768;

export default function Home()
 {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] =
  useState(false);
  const [hobbiesOpen, setHobbiesOpen] =
  useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.openai.com/static-rsc-4/QW6l2beZgHzEP-aUDXbthBPKKg-Y6H8qdGZBdz9NOawTZm0mDuFbVXu6fHv-HN7jf2fZdfc1xiKxGFZBggZOeNcELtWrRrb4OJsIGO9rx_ZYNdOngO-IcdbMvoCiiAcA6gNqscqeP-syXAE64QuDI3HSJWcVPQxiPQA0x5UVPnk?purpose=inline')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
flexDirection: isMobile ? "row" : "column",
alignItems: "center",
justifyContent: "center",
padding: isMobile ? "10px" : "20px",
        fontFamily: "Poppins, sans-serif",
      }}
      
    >
      <div
  style={{
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(rgba(40, 42, 52, 0.72), rgba(47, 51, 73, 0.78))",
  }}
/>

      {/* Glass Window */}
      <div
        style={{
         
 
          height: "auto",
         
          width: isMobile ? "100%" : "90%",
maxWidth: "1400px",
minHeight: isMobile ? "auto" : "90vh",
padding: isMobile ? "20px" : "0px",
          borderRadius: "30px",
          margin: "0 auto",
          justifyContent: "center",
          background: "rgba(2,6,23,0.45)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(154, 117, 159, 0.17)",
          boxShadow: "0 0 50px rgba(42, 39, 39, 0.35)",
          color: "blackS",
          overflow: "visible",
          position: "relative",
        }}
      >
        {/* Top Bar */}
<div
  style={{
    padding: isMobile ? "12px" : "20px 30px",
    display: "flex",
    fontSize: isMobile ? "11px" : "18px",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <div style={{ display: "flex", gap: "10px" }}>
    <div
  style={{
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#ff5f57",
  }}
/>
   <div
  style={{
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#ffbd2e",
  }}
/>
   <div
  style={{
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#28c840",
  }}
/>
  </div>

  <div
    style={{
      color: "white",
      fontWeight: "500",
      fontSize: "18px",
    }}
  >
    {new Date().toLocaleString()}
  </div>
</div>

        {/* Navbar */}
        <div
          style={{
            
            display: "flex",
flexWrap: "wrap",
            fontSize: isMobile ? "11px" : "14px",
            justifyContent: "center",
            gap: isMobile ? "10px" : "18px",
marginTop: "0px",
            fontWeight: "bold",
            padding: isMobile ? "8px 10px" : "10px 18px",
          }}
        >
          {[
            
            "About",
            "Projects",
            "Resume",
            "Skills",
            "Hobbies",
            "Contact",
          ].map((item) => (
            <button
  key={item}
  onClick={() => {
    if (item === "About") setAboutOpen(true);
    if (item === "Projects") setProjectsOpen(true);
    if (item === "Skills") setSkillsOpen(true);
    if (item === "Hobbies") setHobbiesOpen(true);
    if (item === "Resume") setResumeOpen(true);
    if (item === "Contact") setContactOpen(true);
  }}
  style={{
    padding: isMobile ? "8px 12px" : "10px 18px",
fontSize: isMobile ? "12px" : "14px",
    borderRadius: "12px",
    background: "rgba(15,23,42,0.75)",
    border: "1px solid rgba(168,85,247,0.4)",
    color: "white",
    cursor: "pointer",
      }}
>
  {item}
</button>
          ))}

          
        </div>
        

{/* Main Section */}
<div
  style={{
  display: "flex",
  flexDirection: isMobile ? "column-reverse" : "row",
  justifyContent: "center",
  alignItems: "center",
  padding: isMobile ? "30px 10px" : "10px 50px",
  gap: isMobile ? "20px" : "40px",
  minHeight: "420px",
  }}
>
  {/* Left Side */}
  <div
    style={{
      flex: 1,
      width: "100%",
maxWidth: isMobile ? "100%" : "550px",

textAlign: isMobile ? "center" : "left",
    }}
  >
    <p
      style={{
        fontSize:isMobile ? "18px":"24px",
        color: "#d8b4fe",
        marginBottom: "10px",
      }}
    >
      Hello, I'm
    </p>

    <h1
      style={{
       fontSize:isMobile ? "46px":"clamp(40px,4vw,65px)",
        fontWeight: 800,
        
        margin: 0,
        lineHeight: 1,
        background:
          "linear-gradient(90deg,#60a5fa,#c084fc,#e879f9)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Alige Shruthi
    </h1>

    <p
      style={{
        marginTop: "25px",
        fontSize:isMobile ? "15px":"18px",
        color: "#e5e7eb",
        lineHeight: 1.8,
      }}
    >
      MSc Chemistry student with experience in
      research, technical projects, and analytical
      problem solving. Passionate about
      data-driven decision making and process
      improvement.
    </p>

    <p
      style={{
        marginTop: "15px",
        fontSize: "18px",
        color: "#d8b4fe",
      }}
    >
      Open to Analyst, Operations &
      Graduate Opportunities
    </p>

    <p
      style={{
        marginTop: "12px",
        fontSize: "16px",
        color: "#cbd5e1",
      }}
    >
      Exploring the What, Why and How*
    </p>
  </div>

  <div
  style={{
    width:isMobile ? "280px":"350px",
    maxWidth: "100%",
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
      }}
>

  <PatternMemory />
</div>

</div>
        {/* Bottom Buttons */}
    <div
  style={{
    display: "flex",
    justifyContent:"center",
flexWrap:"wrap",
    alignItems: "left",
    gap:isMobile ? "10px":"18px",
    marginTop: "5px",
  }}
>
  <a
    href="https://github.com/Shruthii7"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding:isMobile ? "10px 16px":"14px 28px",
      borderRadius: "12px",
      background: "rgba(15,23,42,0.8)",
      border: "1px solid rgba(96,165,250,0.4)",
      color: "white",
      textDecoration: "none",
      fontWeight:600,
fontSize:isMobile ? "13px":"16px",
    }}
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/alige-s-553653284/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding:isMobile ? "10px 16px":"14px 28px",
      borderRadius: "12px",
      background: "rgba(15,23,42,0.8)",
      border: "1px solid rgba(168,85,247,0.4)",
      color: "white",
      textDecoration: "none",
      fontWeight:600,
fontSize:isMobile ? "13px":"16px",
    }}
  >
    LinkedIn
  </a>

  <a
    href="https://medium.com/@shruthialige"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding:isMobile ? "10px 16px":"14px 28px",
      borderRadius: "12px",
      background: "rgba(15,23,42,0.8)",
      border: "1px solid rgba(236,72,153,0.4)",
      color: "white",
      textDecoration: "none",
      fontWeight:600,
fontSize:isMobile ? "13px":"16px",
    }}
  >
    Medium
  </a>
 

         
        </div>
      </div>
      <AboutModal
  isOpen={aboutOpen}
  onClose={() => setAboutOpen(false)}

/>
{skillsOpen && (
  <SkillsModal
    onClose={() => setSkillsOpen(false)}
  />
)}
{contactOpen && (
  <ContactModal
    onClose={() => setContactOpen(false)}
  />
)}
{projectsOpen && (
  <ProjectsModal
    onClose={() => setProjectsOpen(false)}
  />
)}

{hobbiesOpen && (
  <HobbiesModal
    onClose={() => setHobbiesOpen(false)}
  />
)}

{resumeOpen && (
  <ResumeModal
    onClose={() => setResumeOpen(false)}
  />
)}

    </main>
  );
  
}
