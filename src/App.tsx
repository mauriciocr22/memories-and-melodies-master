import { CardAulas } from "./components/CardAulas";
import { Navbar } from "./components/Navbar";
import { Titulo } from "./components/Titulo";
import { Historia } from "./components/Historia";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

function App() {
  return (
    <div className="LandingPage">
      <Navbar />
      <Titulo />
      <CardAulas />
      <About />
      <Historia />
      <Footer />
    </div>
  );
}

export default App;
