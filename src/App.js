import "./App.css";

function App() {
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
          <input placeholder="Enter track name"></input>
          <div className="search-container">
            <input placeholder="Enter artist name (optional)"></input>
            <button className="search-btn">Search Lyrics</button>
          </div>
        </div>
        <div className="lyrics">
          <button className="copy-lyrics">Copy Lyrics</button>
          <p className="display-lyrics">{"Nothing here yet"}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
