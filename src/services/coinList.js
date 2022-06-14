import axios from "axios";

const ALL_COINS_URL =
  "https://min-api.cryptocompare.com/data/all/coinlist?summary=true";
const getAllCoins = async () => {
  try {
    const {
      data: { Data },
    } = await axios.get(ALL_COINS_URL);
    const coinList = Object.keys(Data);
    if (coinList.length > 0) return coinList;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export { getAllCoins };
