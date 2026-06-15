"use client";

import { useState } from "react";

export default function PatternMemory() {
  const generatePattern = () => {
  const numbers: number[] = [];

  while (numbers.length < 5) {
    const random = Math.floor(Math.random() * 9);

    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }

  return numbers;
};
const [correctPattern, setCorrectPattern] =
  useState<number[]>([]);
  const [started, setStarted] = useState(false);
  const [showPattern, setShowPattern] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

const [bestScore, setBestScore] = useState(
  typeof window !== "undefined"
    ? Number(localStorage.getItem("bestScore")) || 0
    : 0
);

  const startGame = () => {
    const newPattern = generatePattern();
setCorrectPattern(newPattern);
    setStarted(true);
    setShowPattern(true);
    setSelected([]);
    setResult("");

    setTimeout(() => {
      setShowPattern(false);
    }, 3000);
  };

  const toggleCell = (index: number) => {
    if (selected.includes(index)) {
      setSelected(
        selected.filter((i) => i !== index)
      );
    } else {
      setSelected([...selected, index]);
    }
  };

  const checkAnswer = () => {
  const correct =
    [...selected].sort().join(",") ===
    [...correctPattern].sort().join(",");

  if (correct) {
    const newScore = score + 1;

    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);

      localStorage.setItem(
        "bestScore",
        newScore.toString()
      );
    }

    setResult("🎉 Correct!");
  } else {
    setResult("❌ Wrong Pattern");
  }
};

  return (
    <div
      style={{
        width: "320px",
        background: "rgba(255,255,255,0.05)",
        border:
          "1px solid rgba(168,85,247,0.3)",
        borderRadius: "20px",
        padding: "25px",
        color: "white",
      }}
    >
      <h2>🧠 Pattern Recall</h2>
<p>
  Score: {score}
</p>

<p>
  Best: {bestScore}
</p>
      {!started && (
        <>
          <p>
            Test your visual memory.
          </p>

          <button
            onClick={startGame}
            style={buttonStyle}
          >
            Start
          </button>
        </>
      )}

      {started && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3,70px)",
              gap: "10px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {[...Array(9)].map((_, index) => {
              const active = showPattern
                ? correctPattern.includes(index)
                : selected.includes(index);

              return (
                <div
                  key={index}
                  onClick={() =>
                    !showPattern &&
                    toggleCell(index)
                  }
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    background: active
                      ? "#c084fc"
                      : "rgba(255,255,255,0.08)",
                    border:
                      "1px solid rgba(255,255,255,0.2)",
                  }}
                />
              );
            })}
          </div>

          {!showPattern && (
            <>
              <button
                onClick={checkAnswer}
                style={{
                  ...buttonStyle,
                  marginTop: "20px",
                }}
              >
                Check Answer
              </button>

              <p
  style={{
    marginTop: "15px",
  }}
>
  {result}
</p>

{result && (
  <div
    style={{
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    }}
  >
    <button
      onClick={startGame}
      style={buttonStyle}
    >
      New Pattern
    </button>

    <button
      onClick={() => {
        setStarted(false);
        setResult("");
      }}
      style={buttonStyle}
    >
      Home
    </button>
  </div>
)}
            </>
          )}
        </>
      )}
    </div>
  );
}

const buttonStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  background:
    "linear-gradient(90deg,#60a5fa,#c084fc)",
  color: "white",
  fontWeight: "bold",
};