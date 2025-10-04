import "./App.css";
import CarouselWithCssSnap from "./components/CarouselWithCssSnap";
import CarouselWithJsSnap from "./components/CarouselWithJsSnap";
import { DinoCard } from "./components/DinoCard";
import yogaraptorLogo from "./assets/logo.avif";
import yogaraptorIcon from "./assets/yogaraptor-icon.png";
import chillodactylIcon from "./assets/chillodactyl-icon.png";
import tricalmotopsIcon from "./assets/tricalmotops-icon.png";

const Slide = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
    }}
  >
    {children}
  </div>
);

function App() {
  return (
    <div>
      <h1>Cards</h1>
      <DinoCard
        name="Yogaraptor"
        image={yogaraptorLogo}
        description="A small, agile dinosaur."
        onRelease={() => alert("Yogaraptor released!")}
      />

      <h1>Dino Carousels</h1>
      <h2>Scroll snap via JS</h2>
      <CarouselWithJsSnap>
        <Slide>
          <img alt="" src={yogaraptorIcon} />
          Yogaraptor
        </Slide>
        <Slide>
          <img alt="" src={chillodactylIcon} />
          Chillodactyl
        </Slide>
        <Slide>
          <img alt="" src={tricalmotopsIcon} />
          Tricalmatops
        </Slide>
      </CarouselWithJsSnap>

      <h2>Scroll snap via CSS</h2>
      <CarouselWithCssSnap>
        <Slide>
          <img alt="" src={yogaraptorIcon} />
          Yogaraptor
        </Slide>
        <Slide>
          <img alt="" src={chillodactylIcon} />
          Chillodactyl
        </Slide>
        <Slide>
          <img alt="" src={tricalmotopsIcon} />
          Tricalmatops
        </Slide>
      </CarouselWithCssSnap>
    </div>
  );
}

export default App;
