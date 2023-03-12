import { useState } from "react";
import "./App.css";

function App() {
  const [lyrics, setLyrics] = useState(null);
  const [trackName, setTrackName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [copied, setCopied] = useState(false);

  const getTrack = (e) => {
    setTrackName(e.target.value);
  };

  const getArtist = (e) => {
    setArtistName(e.target.value);
  };

  const handleClick = async () => {
    if (trackName.trim() === "") {
      console.error("Track name can't be empty!");
    } else {
      const res = await fetch(
        `https://lyrist.vercel.app/api/${trackName}/${artistName}`
      );
      if (res.ok) {
        const data = await res.json();
        setLyrics(data);
      } else {
        res.error("Lyrics not found!");
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(lyrics?.lyrics || "")
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        console.error("Couldn't Copy!");
      });
  };

  return (
    <div className="App">
      <section className="logo">
        <h2>Lyrics Sharing App</h2>
        <p className="app-desc">
          a simple and easy to use app to share song lyrics with your friends
        </p>
      </section>
      <section className="main-body">
        <div className="search-lyrics">
          <input placeholder="Enter track name" onChange={getTrack}></input>
          <div className="search-container">
            <input
              placeholder="Enter artist name (optional)"
              onChange={getArtist}
            ></input>
            <button className="search-btn" onClick={handleClick}>
              Search Lyrics
            </button>
          </div>
        </div>
        <div className="lyrics">
          <button className="copy-lyrics" onClick={handleCopy}>
            Copy Lyrics
          </button>
          <p className="display-lyrics">
            {lyrics?.lyrics || "Nothing here yet ..."}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
