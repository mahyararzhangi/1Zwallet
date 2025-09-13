// Coins.jsx
import { Box } from "@mui/material";
import icons from "../icons/icons.jsx";

export const Coins = () => {
  const coins = [
    "bitfinex",
    "monero",
    "tether",
    "steemit",
    "binance",
    "ripple",
    "coinbase",
    "bitcoin",
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: { xs: "space-between", md: "space-between" },
          alignItems: "center",
          gap: 2,
          mb: 5,
        }}
      >
        {coins.map((item, index) => {
          return <Box key={index}>{icons[item]}</Box>;
        })}
      </Box>
    </>
  );
};
