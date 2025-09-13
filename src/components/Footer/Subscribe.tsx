import { Box, Grid, TextField, Typography } from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";

const Subscribe = () => {
  return (
    <>
      <Grid
        item
        size={{ xs: 12, md: 4 }}
        sx={{
          width: { md: "344px" },
          textAlign: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography variant="h6" textAlign={{ xs: "center", md: "left" }}>
          1z Wallet
        </Typography>
        <Typography variant="body2" textAlign={{ xs: "center", md: "left" }}>
          A specialized solution for managing Bitcoin assets, designed with a
          bank-like structure to provide secure storage, fast transfers, and
          reliable receipt.
        </Typography>
        <Box
          display="flex"
          justifyContent={{ xs: "center", md: "left" }}
          gap={1}
          mt={2}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Your Email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E5F2EF54",
                  borderRadius: "50px",
                  height: "50px",
                },
                "&:hover fieldset": {
                  borderColor: "#f2f2f2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "blue",
                },
              },
              "& input::placeholder": {
                color: "#E5F2EF8A",
              },
            }}
          />
          <ButtonPrimary text="Subscribe" link="" />
        </Box>
      </Grid>
    </>
  );
};

export default Subscribe;
