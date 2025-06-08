import "./App.css";
import CustomIcon from "../../icons/CustomIcon";

function App() {
  return (
    <>
      <div></div>
      <h1>1Z Wallet</h1>
      <div>
        <CustomIcon name="siteLogo" size={50} color="blue" />
      </div>
      <div className="card">
        <CustomIcon name="bitfinex" size={100} color="blue" />
        <CustomIcon name="monero" size={100} color="blue" />
        <CustomIcon name="tether" size={100} color="blue" />
        <CustomIcon name="steemit" size={100} color="blue" />
        <CustomIcon name="binance" size={100} color="blue" />
        <CustomIcon name="ripple" size={100} color="blue" />
        <CustomIcon name="coinbase" size={100} color="blue" />
        <CustomIcon name="bitcoin" size={100} color="blue" />
        <CustomIcon name="android" size={100} color="blue" />
      </div>
      <div>
        <CustomIcon name="bitcoinIcon" size={30} color="blue" />
        <CustomIcon name="ethereumeIcon" size={30} color="blue" />
        <CustomIcon name="rippleIcon" size={30} color="blue" />
      </div>
    </>
  );
}

export default App;
