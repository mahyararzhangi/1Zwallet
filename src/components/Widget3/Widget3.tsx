import { Grid, Typography } from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";

const Widget3 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        1
      </Grid>
      <Grid item md={6}>
        <Typography>Get ready to explore the crypto world</Typography>
        <Typography>
          Join now with 1Z Wallet to get your own bitcoin bank on your phone
        </Typography>
        <ButtonPrimary text="Get Started" link="www.google.com" />
      </Grid>
    </Grid>
  );
};

export default Widget3;
