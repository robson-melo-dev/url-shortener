import "./App.scss";
import Hero from "./sections/Hero/Hero";
import Shortener from "./sections/Shortener/Shortener";
import Statistics from "./sections/Statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Hero />
      <Shortener />
      <Statistics />
    </div>
  );
}

export default App;
