import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CssScrollSnapCarousel, JsScrollCarousel } from "./components/Carousel";
import { DinoCard } from "./components/DinoCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <h1>Cards</h1>
      <DinoCard
        name="Yogaraptor"
        image="https://example.com/yogaraptor.png"
        description="A small, agile dinosaur."
      />

      <h1>Carousels</h1>
      <JsScrollCarousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </JsScrollCarousel>

      <CssScrollSnapCarousel>
        <div>
          <DinoCard
            name="Yogaraptor"
            image="https://example.com/yogaraptor.png"
            description="A small, agile dinosaur."
          />
        </div>
        <div>
          <DinoCard
            name="Tyrannosaurus Rex"
            image="https://example.com/trex.png"
            description="A large carnivorous dinosaur."
          />
        </div>
        <div>
          <DinoCard
            name="Triceratops"
            image="https://example.com/triceratops.png"
            description="A herbivorous dinosaur with three horns."
          />
        </div>
        <div>
          <DinoCard
            name="Velociraptor"
            image="https://example.com/velociraptor.png"
            description="A small, fast dinosaur."
          />
        </div>
      </CssScrollSnapCarousel>
    </div>
  );
}

export default App;
