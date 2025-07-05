import { Box, Grid, Stack, Typography } from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";

const Widget2 = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Simple steps to get started
      </Typography>

      <Grid container spacing={2} sx={{ mb: 10 }}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Stack flexDirection="row">
            <Typography
              variant="h6"
              sx={{
                fontSize: "50px",
                opacity: "0.2",
                fontWeight: "bold",
                marginRight: 2,
              }}
            >
              1.
            </Typography>
            <Box>
              <Typography sx={{ fontSize: "25px" }}>
                Download the 1Z App
              </Typography>
              <Typography sx={{ fontSize: "19px" }}>
                It'll take you 2 minutes tops
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }}>
          <Stack flexDirection="row">
            <Typography
              variant="h6"
              sx={{
                fontSize: "50px",
                opacity: "0.2",
                fontWeight: "bold",
                marginRight: 2,
              }}
            >
              2.
            </Typography>
            <Box>
              <Typography sx={{ fontSize: "25px" }}>Security setup</Typography>
              <Typography sx={{ fontSize: "19px" }}>
                It'll take you 2 minutes tops
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }}>
          <Stack flexDirection="row">
            <Typography
              variant="h6"
              sx={{
                fontSize: "50px",
                opacity: "0.2",
                fontWeight: "bold",
                marginRight: 2,
              }}
            >
              3.
            </Typography>
            <Box>
              <Typography sx={{ fontSize: "25px" }}> Take your pass</Typography>
              <Typography sx={{ fontSize: "19px" }}>
                It'll take you 2 minutes tops
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }}>
          <Stack flexDirection="row">
            <Typography
              variant="h6"
              sx={{
                fontSize: "50px",
                opacity: "0.2",
                fontWeight: "bold",
                marginRight: 2,
              }}
            >
              4.
            </Typography>
            <Box>
              <Typography sx={{ fontSize: "25px" }}>Create wallet</Typography>
              <Typography sx={{ fontSize: "19px" }}>
                Start trading at your desired rate and get paid
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }}>
          <Stack flexDirection="row">
            <Typography
              variant="h6"
              sx={{
                fontSize: "50px",
                opacity: "0.2",
                fontWeight: "bold",
                marginRight: 2,
              }}
            >
              5.
            </Typography>
            <Box>
              <Typography sx={{ fontSize: "25px" }}>Ready to use</Typography>
              <Typography sx={{ fontSize: "19px" }}>
                Enjoy your trading experience
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }} sx={{ mt: "auto" }}>
          <ButtonPrimary text="Get Started" link="google.com" />
        </Grid>
      </Grid>
    </>
  );
};

export default Widget2;
