import { CardAulas } from "./components/CardAulas";
import { Navbar } from "./components/Navbar";
import { Titulo } from "./components/Titulo";
import { Historia } from "./components/Historia";

function App() {
  return (
    <div className="LandingPage">
      <Navbar />
      <Titulo />
      <CardAulas />
      <Historia />
    </div>
  );
}

export default App;
