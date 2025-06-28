import { Stack } from "@mui/material";
import CustomIcon from "../icons/CustomIcon";
export const Coins = () => {
  return (
    <>
      <Stack
        sx={{ flexDirection: "row", justifyContent: "space-between", mb: 5 }}
      >
        <CustomIcon name="bitfinex" size={100} color="blue" />
        <CustomIcon name="monero" size={100} color="blue" />
        <CustomIcon name="tether" size={100} color="blue" />
        <CustomIcon name="steemit" size={100} color="blue" />
        <CustomIcon name="binance" size={100} color="blue" />
        <CustomIcon name="ripple" size={100} color="blue" />
        <CustomIcon name="coinbase" size={100} color="blue" />
        <CustomIcon name="bitcoin" size={100} color="blue" />
        <CustomIcon name="android" size={100} color="blue" />
      </Stack>
    </>
  );
};
