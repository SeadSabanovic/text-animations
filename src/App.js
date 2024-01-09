import "./App.scss";
import { ReactLenis } from "@studio-freight/react-lenis";
import TextFollow from "./components/TextFollow";
import Intro from "./components/Intro";
import Pop from "./components/Pop";
import Roll from "./components/Roll";

function App() {
  return (
    <ReactLenis root>
      <div className="container">
        <Intro />
        <TextFollow />
        <Pop />
        <Roll />
      </div>
    </ReactLenis>
  );
}

export default App;
