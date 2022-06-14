import { useState } from "react";
import { Ticker } from "../Components";
import { HR } from "../Components";
import { Cards } from "../Components";
import { Graph } from "../Components";
import { Loading } from "../Components";
const cards = [
  {
    name: "BTC",
    value: [123],
  },
  {
    name: "DOGE",
    value: [12],
  },
  {
    name: "BCT",
    value: [1234],
  },
  {
    name: "CHD",
    value: [],
  },
];

const Home = () => {
  const [tickers, setTickers] = useState(cards);
  const [loading, setloading] = useState(false);
  const handleAddTicker = (ticker) => {
    const NewTicker = {
      name: ticker,
      value: [],
    };
    setTickers([...tickers, NewTicker]);
  };
  return (
    <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
      {loading && <Loading />}
      <div className="container">
        <Ticker onAddTicker={handleAddTicker} />
        <HR />
        <Cards cards={tickers} />
        <HR />
        <Graph />
      </div>
    </div>
  );
};
export default Home;
