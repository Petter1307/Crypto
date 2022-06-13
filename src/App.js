import "./App.css";
import Cards from "./Components/Cards";
import HR from "./Components/HorizontalLine";
import Coins from "./Components/Coins";
import Graph from "./Components/Graph";
const cards = [
  { name: "WTF - USD", value: "1.11" },
  { name: "VUE - RUB", value: "80000.00" },
  { name: "BTC - USD", value: "99999.99" },
  { name: "DOGE - USD", value: "0.0014 " },
];
const coins = ["BTC", "DOGE", "BCH", "CHD"];
function App() {
  return (
    <div className="App">
      <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
        <div className="container">
          <Coins coins={coins} />
          <HR />
          <Cards cards={cards} />
          <HR />
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
