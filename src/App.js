import "./App.scss";
import Section from "./components/Section";

function App() {
  const sections = Array.from({ length: 4 }, (_, index) => (
    <Section key={index} style={index} />
  ));

  return (
    <div className="App">
      <div className="container">{sections}</div>
    </div>
  );
}

export default App;
