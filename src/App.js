import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const webcamRef = useRef(null);
  const [emotion, setEmotion] = useState("");
  const [playlist, setPlaylist] = useState("");

  const emotions = ["Happy", "Sad", "Angry", "Neutral", "Tired"];

  const capture = () => {
    setEmotion("Analyzing...");

    setTimeout(() => {
      const randomEmotion =
        emotions[Math.floor(Math.random() * emotions.length)];

      setEmotion(randomEmotion);

      if (randomEmotion === "Happy")
        setPlaylist("https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC");
      else if (randomEmotion === "Sad")
        setPlaylist("https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1");
      else if (randomEmotion === "Angry")
        setPlaylist("https://open.spotify.com/playlist/37i9dQZF1DWZwtERXCS82H");
      else if (randomEmotion === "Tired")
        setPlaylist("https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp");
      else
        setPlaylist("https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6");
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="title">MODIFY.AI</h1>
      <p className="subtitle">Music that understands your mood</p>

      <div className="card">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          className="webcam"
        />

        <button className="detect-btn" onClick={capture}>
          Detect Emotion
        </button>

        <h2 className="emotion">{emotion}</h2>

        {playlist && (
          <a href={playlist} target="_blank" rel="noreferrer">
            <button className="playlist-btn">
              Open Recommended Playlist
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
