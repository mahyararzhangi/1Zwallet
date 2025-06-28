import { Box, Stack, Typography } from "@mui/material";

const PopularCoin = () => {
  return (
    <>
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Popular Coin
      </Typography>
      <Stack
        sx={{ flexDirection: "row", justifyContent: "space-around", mb: 5 }}
      >
        <Box>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography>Bitcoin</Typography>
            <Typography>BTC/USDT</Typography>
          </Stack>
          <Typography>$40,322.50</Typography>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                backgroundColor: "#FF8811",
                padding: "5px",
                borderRadius: "50px",
              }}
            >
              +0.23%
            </Typography>
            <Typography>Chart</Typography>
          </Stack>
        </Box>

        <Box>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography>Bitcoin</Typography>
            <Typography>BTC/USDT</Typography>
          </Stack>
          <Typography>$40,322.50</Typography>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                backgroundColor: "#FF8811",
                padding: "5px",
                borderRadius: "50px",
              }}
            >
              +0.23%
            </Typography>
            <Typography>Chart</Typography>
          </Stack>
        </Box>
        <Box>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography>Bitcoin</Typography>
            <Typography>BTC/USDT</Typography>
          </Stack>
          <Typography>$40,322.50</Typography>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                backgroundColor: "#FF8811",
                padding: "5px",
                borderRadius: "50px",
              }}
            >
              +0.23%
            </Typography>
            <Typography>Chart</Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default PopularCoin;
