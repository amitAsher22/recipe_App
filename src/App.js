import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container main">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
