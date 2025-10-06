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
      <div style={{ margin: "20px 0" }}>
        <h2>Illustration Component</h2>
        <BookbuildingComponent />
      </div>
    </>
  );
}

export default App;
