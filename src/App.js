/*import Co2 from "./components/co2/Co2";*/
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Temperature from "./components/temperature/Temperature";
/*import Methane from "./components/methane/Methane";*/
import "./style.css";

function App() {
  return (
    <div>
      <Main />
      <Navbar />
      <Temperature />
    </div>
  );
}

export default App;

/* <Co2 />
<Methane /> */
