import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RiveComponent from "./RiveComponent";
import IllustrationComponent from "./IllustrationComponent";
import BookbuildingComponent from "./BookbuildingComponent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [codeInput, setCodeInput] = useState("Hello Rive!");
  const [illustrationText, setIllustrationText] = useState("EMAS");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Rive</h1>

      {/* Rive Animation Component */}
      <div style={{ margin: "20px 0" }}>
        <h2>Rive Animation with Data Binding</h2>

        {/* Input for dynamic data binding */}
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <label
            htmlFor="codeInput"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Enter text to bind to Rive "Code" view model:
          </label>
          <input
            id="codeInput"
            type="text"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "2px solid #646cff",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
            }}
            placeholder="Type something here..."
          />
        </div>

        <RiveComponent inputValue={codeInput} />
      </div>

      {/* SVG Illustration Component */}
      <div style={{ margin: "20px 0" }}>
        <h2>Dynamic SVG Illustration</h2>

        {/* Input for dynamic text */}
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <label
            htmlFor="illustrationInput"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Enter text to display in the illustration:
          </label>
          <input
            id="illustrationInput"
            type="text"
            value={illustrationText}
            onChange={(e) => setIllustrationText(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "2px solid #646cff",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
            }}
            placeholder="Type something here..."
          />
        </div>

        <IllustrationComponent dynamicText={illustrationText} />
      </div>

      {/* Bookbuilding Component with Animated Paths */}
      <div style={{ margin: "20px 0" }}>
        <h2>Bookbuilding Component with Animated Green Paths</h2>
        <BookbuildingComponent />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
