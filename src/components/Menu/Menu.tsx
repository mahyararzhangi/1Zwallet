import { Box, Stack, Typography } from "@mui/material";
import CustomIcon from "../../icons/CustomIcon";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";
import { ButtonSecondary } from "../../Partials/ButtonSecondary";

export const Menu = () => {
  return (
    <Stack
      className="menu-wrapper"
      sx={{ flexDirection: "row", justifyContent: "space-between" }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomIcon name="siteLogo" size={54} color="blue" />
        <Typography
          sx={{ fontSize: "24px", fontWeight: "900", paddingX: "15px" }}
        >
          1z wallet
        </Typography>
      </Stack>

      <Box>
        <ButtonSecondary
          text="Support"
          link="https://www.google.com"
          width="101"
          height="32"
        />
        <ButtonPrimary
          text="Download"
          link="https://www.google.com"
          width="100"
          height="31"
        />
      </Box>
    </Stack>
  );
};
