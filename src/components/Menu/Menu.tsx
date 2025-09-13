import { Box, Stack, Typography } from "@mui/material";
import CustomIcon from "../../icons/CustomIcon";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";
import { ButtonSecondary } from "../../Partials/ButtonSecondary";

export const Menu = () => {
  return (
    <Stack
      className="menu-wrapper"
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        mb: 5,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CustomIcon name="siteLogo" size={54} color="blue" />
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "24px",
            },
            fontWeight: 900,
            paddingX: "15px",
          }}
        >
          1z wallet
        </Typography>
      </Stack>

      <Stack
        sx={{
          gap: 1,
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          flexDirection: "row",
        }}
      >
        <ButtonSecondary
          text="Support"
          link="/download"
          width="101"
          height="32"
        />
        <ButtonPrimary
          text="Download"
          link="/download"
          width={100}
          height={31}
        />
      </Stack>
    </Stack>
  );
};
