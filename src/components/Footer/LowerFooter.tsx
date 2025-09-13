import { Box, Stack, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";

const LowerFooter = () => {
  return (
    <Box
      borderTop="1px solid #fff"
      pt={2}
      textAlign={{ xs: "center", md: "left" }}
    >
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        <Typography order={{ xs: "2", md: "1" }} fontSize={"15px"}>
          &#169; 2025 1z wallet. All rights reserved
        </Typography>
        <Box order={{ xs: "1", md: "2" }} display={"inline-block"}>
          <SocialLinks />
        </Box>
      </Stack>
    </Box>
  );
};

export default LowerFooter;
