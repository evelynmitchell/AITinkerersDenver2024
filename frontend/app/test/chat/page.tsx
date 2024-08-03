"use client";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [returnedText, setReturnedText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReturnedText(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    setReturnedText("");
  };

  // Type the style objects with React.CSSProperties
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "black", // Changed text color to black
  };

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "500px",
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: "10px",
    fontSize: "1rem",
    color: "black", // Changed text color to black
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px",
    fontSize: "1rem",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    color: "black", // Set text color inside the input box to black
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: "flex",
    gap: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#0070f3",
    color: "white",
  };

  const resultStyle: React.CSSProperties = {
    marginTop: "20px",
    textAlign: "center",
    color: "black", // Changed text color to black
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>TITLE: TBD</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="textInput" style={labelStyle}>
          Enter Prompt:
        </label>
        <input
          id="textInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={inputStyle}
        />
        <div style={buttonGroupStyle}>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
          <button type="button" onClick={handleClear} style={buttonStyle}>
            Clear
          </button>
        </div>
      </form>
      {returnedText && (
        <div style={resultStyle}>
          <h2>Returned Text:</h2>
          <p>{returnedText}</p>
        </div>
      )}
    </div>
  );
}
