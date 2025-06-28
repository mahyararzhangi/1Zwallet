import { Grid, Typography } from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";

const Widget2 = () => {
  return (
    <>
      <Typography variant="h3">Simple steps to get started</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">1</Typography>
          <Typography>Download the 1Z App</Typography>
          <Typography>It'll take you 2 minutes tops</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">2</Typography>
          <Typography>Security setup</Typography>
          <Typography>It'll take you 2 minutes tops</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">3</Typography>
          <Typography>Take your pass</Typography>
          <Typography>It'll take you 2 minutes tops</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">4</Typography>
          <Typography>Create wallet</Typography>
          <Typography>
            Start trading at your desired rate and get paid
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">5</Typography>
          <Typography>Ready to use</Typography>
          <Typography>Enjoy your trading experience</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonPrimary text="Get Started" link="google.com" />
        </Grid>
      </Grid>
    </>
  );
};

export default Widget2;
