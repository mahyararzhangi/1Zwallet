import { Box, Grid, Stack, Typography } from "@mui/material";
import "./stylesheet.css";
import { Charts } from "../../Partials/Charts";
import { useContext } from "react";
import { MyContext } from "../../Pages/HomePage";

const PopularCoin = () => {
  const coins = useContext(MyContext);

  // رنگ‌های ثابت برای سه کارت اول
  const bgColors = [
    "rgba(255, 136, 17, 1)",
    "rgba(145, 17, 255, 1)",
    "rgba(17, 187, 255, 1)",
  ];

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
        {coins?.slice(0, 3).map((coin: any, index: number) => {
          const bgColor = bgColors[index % bgColors.length]; // انتخاب رنگ بر اساس index
          return (
            <Grid item xs={12} md={4} key={index}>
              <Box className="card" sx={{ width: "310px" }}>
                <Stack
                  sx={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography sx={{ fontSize: "19px", fontWeight: "500" }}>
                    {coin.name}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                    {coin.symbol.toUpperCase()}/USDT
                  </Typography>
                </Stack>

                <Typography sx={{ mb: 3, fontSize: "37px", fontWeight: "600" }}>
                  ${coin.current_price.toLocaleString()}
                </Typography>

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
                      backgroundColor: bgColor,
                      padding: "3px 12px",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {coin.price_change_percentage_24h > 0
                      ? `+${coin.price_change_percentage_24h.toFixed(2)}%`
                      : `${coin.price_change_percentage_24h.toFixed(2)}%`}
                  </Typography>

                  <Box sx={{ width: "120px", height: "60px" }}>
                    <Charts
                      symbol={`COINBASE:${coin.symbol.toUpperCase()}USD`}
                      color={bgColor}
                    />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PopularCoin;
