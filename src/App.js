import Co2 from "./components/co2/Co2";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Temperature from "./components/temperature/Temperature";
import Methane from "./components/methane/Methane";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Temperature />
      <Co2 />
      <Methane />
    </div>
  );
}

export default App;
