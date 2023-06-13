import { CardAulas } from "./components/CardAulas";
import { Navbar } from "./components/Navbar";
import { Titulo } from "./components/Titulo";
import { Historia } from "./components/Historia";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="LandingPage">
      <Navbar />
      <Titulo />
      <CardAulas />
      <Historia />
      <Footer />
    </div>
  );
}

export default App;
