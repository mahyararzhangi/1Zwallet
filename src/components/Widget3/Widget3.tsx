import { Box, Grid, Typography } from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";
import appImage from "../../assets/Pics/appMobile.png";

const Widget3 = () => {
  return (
    <Grid container className="card" spacing={4} sx={{ width: "100%", mb: 10 }}>
      <Grid
        item
        size={{ xs: 12, md: 4 }}
        textAlign="center"
        margin="auto 0"
        position="relative"
      >
        <Box
          component="img"
          src={appImage}
          alt="App Preview"
          sx={{
            width: "100%",
            maxWidth: 250,
            position: "absolute",
            right: "50%",
            transform: " translateX(50%) translateY(-70%)",
          }}
        />
      </Grid>
      <Grid
        item
        size={{ xs: 12, md: 8 }}
        pt={{ xs: 11, md: 5 }}
        textAlign="center"
      >
        <Typography mb={3} fontSize={30}>
          Get ready to explore the crypto world
        </Typography>
        <Typography mb={3}>
          Join now with 1Z Wallet to get your own bitcoin bank on your phone
        </Typography>
        <ButtonPrimary text="Get Started" link="" />
      </Grid>
    </Grid>
  );
};

export default Widget3;
