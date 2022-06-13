import { userState } from "react";

import { Input } from "../Input";

const mockedAutoCompleteItems = ["BTC", "DOGE", "BCT", "CHD"];

const Ticker = ({ onAddTicker }) => {
  const [ticker, setTicker] = userState("");
  const [autoCompleteItems] = userState(mockedAutoCompleteItems);

  const handleTickerChange = (value) => {
    setTicker(value);
  };
  const handleAddTicker = () => {
    if (ticker.length === 0) return;
    onAddTicker(ticker);
    setTicker("");
  };
  return (
    <>
      <label
        htmlFor="wallet"
        className="block text-sm font-medium text-gray-700"
      >
        Ticker
      </label>
      <div className="mt-1 relative rounded-md shadow-md">
        <Input />
      </div>
    </>
  );
};

export default Ticker;
