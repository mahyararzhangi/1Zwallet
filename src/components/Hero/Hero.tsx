import { Box, Grid, Stack, Typography } from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";

const Hero = () => {
  return (
    // <Stack
    //   sx={{ flexDirection: "row", justifyContent: "space-between", mb: 5 }}
    // >
    //   <Stack>
    //     <Typography>
    //       <Typography variant="h3" fontWeight="900" display={"inline-block"}>
    //         1Z Wallet
    //       </Typography>
    //       <Typography
    //         variant="h3"
    //         component="h3"
    //         fontWeight="400"
    //         display={"inline-block"}
    //       >
    //         , Fastest & secure crypto wallet
    //       </Typography>
    //     </Typography>
    //     <Typography>
    //       1Z Wallet , a specialized solution for managing Bitcoin assets,
    //       designed with a bank-like structure to provide secure storage, fast
    //       transfers, and reliable receipt.
    //     </Typography>
    //     <ButtonPrimary text="Download App" link="google.com" />
    //   </Stack>
    //   <Box>Chart</Box>
    // </Stack>

    <Grid container spacing={8}>
      <Grid size={7}>
        <Stack>
          <Typography>
            <Typography variant="h3" fontWeight="900" display={"inline-block"}>
              1Z Wallet
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              fontWeight="400"
              display={"inline-block"}
            >
              , Fastest & secure crypto wallet
            </Typography>
          </Typography>
          <Typography>
            1Z Wallet , a specialized solution for managing Bitcoin assets,
            designed with a bank-like structure to provide secure storage, fast
            transfers, and reliable receipt.
          </Typography>
          <ButtonPrimary text="Download App" link="google.com" />
        </Stack>
      </Grid>
      <Grid size={5}>chart</Grid>
    </Grid>
  );
};

export default Hero;
