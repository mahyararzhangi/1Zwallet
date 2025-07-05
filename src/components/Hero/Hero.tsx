import { Box, Grid, Stack, Typography } from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";
import Chart from "./chart";
import "./Hero.css";

const Hero = () => {
  return (
    <Grid container spacing={8} sx={{ mb: 5 }}>
      <Grid size={{ xs: 12, md: 7 }}>
        <Stack>
          <Typography
            component="h3"
            className="motto"
            sx={{ mb: 3, lineHeight: "1" }}
            fontSize={{ xs: "50px", md: "65px" }}
          >
            <Box fontWeight="bold" sx={{ display: "inline-block" }}>
              1Z Wallet
            </Box>
            , Fastest & secure crypto wallet
          </Typography>
          <Typography sx={{ mb: 3, width: "65%" }}>
            1Z Wallet , a specialized solution for managing Bitcoin assets,
            designed with a bank-like structure to provide secure storage, fast
            transfers, and reliable receipt.
          </Typography>
          <ButtonPrimary text="Download App" link="google.com" width={229} />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Chart />
      </Grid>
    </Grid>
  );
};

export default Hero;
