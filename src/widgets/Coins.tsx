import { Grid, Stack } from "@mui/material";
import CustomIcon from "../icons/CustomIcon";
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
      <Grid container spacing={2} sx={{ mb: 10 }}>
        {coins.map((name) => (
          <Grid
            item
            key={name}
            size={{ xs: 6, md: 1.5 }}
            textAlign="center"
            height="30px"
          >
            <CustomIcon name={name} size={100} />
          </Grid>
        ))}
      </Grid>

      {/* <Stack flexDirection={}>
        <Box></Box>
      </Stack> */}
    </>
  );
};
