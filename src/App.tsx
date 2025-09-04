import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CssScrollSnapCarousel, JsScrollCarousel } from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <JsScrollCarousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </JsScrollCarousel>

      <CssScrollSnapCarousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </CssScrollSnapCarousel>
    </div>
  );
}

export default App;
