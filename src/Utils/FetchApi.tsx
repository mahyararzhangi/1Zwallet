import { useEffect, useState } from "react";
import axios from "axios";

const FetchApi = () => {
  const [data, setData] = useState<any[]>([]);

  const fetchCoin = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,solana,polkadot,dogecoin,litecoin,chainlink,tron,monero"
      );
      setData(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log("Fetch error:", error.message);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return <></>;
};

export default FetchApi;
