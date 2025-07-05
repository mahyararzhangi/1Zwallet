import { IconButton, Stack, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialLinks = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: { xs: "center", md: "flex-start" },
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Tooltip title="Facebook">
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Twitter">
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Instagram">
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <InstagramIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="YouTube">
        <IconButton
          component="a"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <YouTubeIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default SocialLinks;
