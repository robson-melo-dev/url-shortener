import "./App.scss";
import Boost from "./sections/Boost/Boost";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Shortener from "./sections/Shortener/Shortener";
import Statistics from "./sections/Statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Hero />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
