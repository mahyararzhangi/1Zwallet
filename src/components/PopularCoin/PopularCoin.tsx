import { Box, Grid, Stack, Typography } from "@mui/material";
import ChartTransparent from "../../Partials/ChartTransparent";
import "./stylesheet.css";

const PopularCoin = () => {
  return (
    <>
      <Typography
        component="h2"
        variant="h2"
        sx={{ textAlign: "center", mb: 4 }}
      >
        Popular Coins
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 10 }}>
        <Grid item xs={12} md={4}>
          <Box className="card">
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography>Bitcoin</Typography>
              <Typography>BTC/USDT</Typography>
            </Stack>
            <Typography sx={{ mb: 3 }}>$40,322.50</Typography>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
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
              <Box>
                <ChartTransparent />
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box className="card">
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography>Bitcoin</Typography>
              <Typography>BTC/USDT</Typography>
            </Stack>
            <Typography sx={{ mb: 3 }}>$40,322.50</Typography>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
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
              <Box>
                <ChartTransparent />
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box className="card">
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography>Bitcoin</Typography>
              <Typography>BTC/USDT</Typography>
            </Stack>
            <Typography sx={{ mb: 3 }}>$40,322.50</Typography>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
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
              <Box>
                <ChartTransparent />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PopularCoin;
