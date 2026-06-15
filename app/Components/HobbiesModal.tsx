"use client";

export default function HobbiesModal({
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
          width: "1000px",
          maxWidth: "90vw",
          maxHeight: "85vh",
          overflowY: "auto",
          background: "rgba(5,10,40,0.95)",
          border: "1px solid rgba(168,85,247,0.3)",
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
            fontSize: "40px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          🎨 Digital Art
        </h1>

        <p
          style={{
            color: "#b8b8b8",
            marginBottom: "35px",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Beyond academics and technology, I enjoy
          creating digital illustrations and visual
          artwork. Digital art allows me to combine
          creativity, storytelling, and design thinking.
        </p>

        <h2
          style={{
            marginBottom: "20px",
            color: "#c084fc",
            fontWeight: "bold",
          }}
        >
          Gallery
        </h2>

       <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
  }}
>
  {[
    "/artwork/art1.jpeg",
    "/artwork/art2.jpeg",
    "/artwork/art3.jpeg",
    "/artwork/art4.jpeg",
    "/artwork/art5.jpeg",
    "/artwork/art6.jpeg",
  ].map((image, index) => (
    <div key={index} style={artCard}>
      <img
        src={image}
        alt={`Artwork ${index + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </div>
  ))}
</div>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.04)",
            border:
              "1px solid rgba(168,85,247,0.25)",
          }}
        >
          <h3
          style={{
            color: "#c084fc",
            fontWeight: "bold",
          }}
          >Tools I Use</h3>

          <p>
            Medibang Paint • Canva • Figma
          </p>
        </div>
      </div>
    </div>
  );
}

const artCard = {
  height: "220px",
  borderRadius: "20px",
  border: "1px solid rgba(168,85,247,0.25)",
  background: "rgba(255,255,255,0.04)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#c084fc",
  fontWeight: "bold",
  cursor: "pointer",
};