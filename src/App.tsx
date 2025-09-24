import "./App.css";
import { CssScrollSnapCarousel, JsScrollCarousel } from "./components/Carousel";
import { DinoCard } from "./components/DinoCard";
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
    <div
      style={{
        height: "100vh",
      }}
    >
      {/* <h1>Cards</h1>
      <DinoCard
        name="Yogaraptor"
        image="https://example.com/yogaraptor.png"
        description="A small, agile dinosaur."
        onRelease={() => alert("Yogaraptor released!")}
      /> */}

      <h1>Dino Carousels</h1>
      <h2>Scroll snap via JS</h2>
      <JsScrollCarousel>
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
      </JsScrollCarousel>

      <h2>Scroll snap via CSS</h2>
      <CssScrollSnapCarousel>
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
      </CssScrollSnapCarousel>
    </div>
  );
}

export default App;
