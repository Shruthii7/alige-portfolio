"use client";

type AboutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutModal({
  isOpen,
  onClose,
}: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
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
          background: "rgba(10,15,30,0.92)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "40px",
          zIndex: 1000,
          color: "white",
        }}
      >
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
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "transparent",
            border: "none",
            color: "#aaa",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "30px",
            alignItems: "center",
          }}
        >
          {/* Profile Photo */}
          <div
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #8b5cf6",
            }}
          >
            <img
              src="/shruthi.jpeg"
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* About Content */}
          <div>
            <h1
              style={{
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              Hi, I'm Alige Shruthi
            </h1>

            <p
              style={{
                color: "#c084fc",
                marginBottom: "20px",
              }}
            >
              Analytical Thinker • Research Enthusiast • Problem Solver
            </p>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.8",
              }}
            >
              I am an MSc Chemistry student at NIT Surat passionate about research,
analytics, and technology.

I enjoy solving problems, working on technical projects, and learning
new skills that combine analytical thinking with creativity.

Beyond academics, I spend time creating digital art, exploring design,
and contributing to projects that help me grow professionally.
            </p>

        
          </div>
        </div>

        {/* Interests */}
        <div
          style={{
            marginTop: "35px",
          }}
        >
          <h3>Interests</h3>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "15px",
            }}
          >
            {[
              "Open Source",
              "Data Analytics",
              "Research",
              "Technology",
              "Digital Art",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(139,92,246,0.15)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}