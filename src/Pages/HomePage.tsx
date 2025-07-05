import { Coins } from "../widgets/Coins";
import Hero from "../components/Hero/Hero";
import PopularCoin from "../components/PopularCoin/PopularCoin";
import Widget1 from "../components/Widget1/Widget1";
import Widget2 from "../components/Widget2/Widget2";
import Widget3 from "../components/Widget3/Widget3";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Coins />
      <PopularCoin />
      {/* Market Trend */}
      <Widget1 />
      {/* simple steps... */}
      <Widget2 />
      {/* Get ready... */}
      <Widget3 />
    </>
  );
};

export default HomePage;
