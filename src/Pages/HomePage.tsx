import { Coins } from "../widgets/Coins";
import Hero from "../components/Hero/Hero";
import PopularCoin from "../components/PopularCoin/PopularCoin";
import Widget1 from "../components/Widget1/Widget1";
import Widget2 from "../components/Widget2/Widget2";
import Widget3 from "../components/Widget3/Widget3";
import axios from "axios";
import { useState, useEffect, createContext } from "react";

export let MyContext = createContext();

export const HomePage = () => {
  const [data, setData] = useState<any[]>([]);

  const fetchCoin = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,solana,polkadot,dogecoin,litecoin,chainlink,tron,monero"
      );
      setData(res.data);
      // console.log(res.data);
    } catch (error: any) {
      console.log("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <>
      <MyContext.Provider value={data}>
        <Hero />
        <Coins />
        <PopularCoin />
        {/* Market Trend */}
        <Widget1 />
        {/* simple steps... */}
        <Widget2 />
        {/* Get ready... */}
        <Widget3 />
      </MyContext.Provider>
    </>
  );
};

//  default HomePage;
