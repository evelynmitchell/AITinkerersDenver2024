"use client";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [videoId, setVideoId] = useState("66ae91e8fe45e78ff2976a75"); // Default video ID
  const [responseData, setResponseData] = useState<{
    id: string;
    data: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          video_id: videoId,
          prompt: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResponseData({ id: data.id, data: data.data });
    } catch (error) {
      console.error(error);
      setResponseData({
        id: "",
        data: "Error generating text. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setResponseData(null);
  };

  // Style objects
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
    color: "black",
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
    color: "black",
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px",
    fontSize: "1rem",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    color: "black",
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
    position: "relative",
    opacity: loading ? 0.6 : 1,
    pointerEvents: loading ? "none" : "auto",
  };

  const resultStyle: React.CSSProperties = {
    marginTop: "20px",
    textAlign: "center",
    color: "black",
  };

  const loadingStyle: React.CSSProperties = {
    marginTop: "20px",
    textAlign: "center",
    color: "black",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>TITLE: TBD</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="videoId" style={labelStyle}>
          Video ID:
        </label>
        <input
          id="videoId"
          type="text"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
          style={inputStyle}
        />
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
          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            style={buttonStyle}
            disabled={loading}
          >
            Clear
          </button>
        </div>
      </form>
      {responseData && !loading && (
        <div style={resultStyle}>
          <h2>Response:</h2>
          <p>
            <strong>ID:</strong> {responseData.id}
          </p>
          <p>
            <strong>Data:</strong> {responseData.data}
          </p>
        </div>
      )}
    </div>
  );
}
