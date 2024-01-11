import "./App.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import TextFollow from "./components/TextFollow";
import Intro from "./components/Intro";
import Pop from "./components/Pop";
import Roll from "./components/Roll";
import Typewriter from "./components/Typewriter";
import Header from "./components/Header";

function App() {
  return (
    <ReactLenis root>
      <div className="container">
        <Intro />
        <TextFollow />
        <Pop />
        <Roll />
        <Typewriter />
        <Header />
      </div>
    </ReactLenis>
  );
}

export default App;
