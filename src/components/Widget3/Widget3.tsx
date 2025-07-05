import { Grid, Typography } from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";

const Widget3 = () => {
  return (
    <Grid container className="card" spacing={4} sx={{ width: "100%", mb: 10 }}>
      <Grid item size={{ xs: 12, md: 4 }} textAlign="center" margin="auto 0">
        Mobile picture
      </Grid>
      <Grid item size={{ xs: 12, md: 8 }} textAlign="center">
        <Typography mb={3} fontSize={30}>
          Get ready to explore the crypto world
        </Typography>
        <Typography mb={3}>
          Join now with 1Z Wallet to get your own bitcoin bank on your phone
        </Typography>
        <ButtonPrimary text="Get Started" link="https://www.google.com" />
      </Grid>
    </Grid>
  );
};

export default Widget3;
