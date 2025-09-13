import { Box, Stack, Typography } from "@mui/material";
import { ButtonPrimary } from "../Partials/ButtonPrimary";
import "./DownloadStyle.css";
import { AndroidIcon } from "../assets/icons/AndroidIcon";
import { IosIcon } from "../assets/icons/IosIcon";
import qrcode from "../assets/Pics/qrCode.jpg";

const DownloadPage = () => {
  return (
    <>
      <Typography
        component="h3"
        className="textGradient"
        sx={{ mb: 3, lineHeight: "1" }}
        fontSize={{ xs: "50px", md: "65px" }}
      >
        Install&nbsp;
        <Box fontWeight="bold" sx={{ display: "inline-block" }}>
          1Z Wallet
        </Box>
        , on your Phone!
      </Typography>

      <Typography mb={10}>
        1z Wallet is a specialized wallet built exclusively for the Bitcoin
        network. By focusing solely on Bitcoin, this wallet offers enhanced
        performance, security, and reliability tailored to the unique structure
        of the Bitcoin blockchain. It is not intended for use with other
        cryptocurrencies, ensuring a streamlined and optimized experience for
        Bitcoin users.
      </Typography>

      <Stack className="card cardGradient" px={10} py={5} mb={10}>
        {/* Android Section */}
        <Stack
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          <Box
            display="flex"
            flexDirection="row"
            marginBottom={{ xs: "15px", md: "0px" }}
          >
            <AndroidIcon />

            <Typography>
              1z wallet for&nbsp;
              <Box fontWeight="bold" sx={{ display: "inline-block" }}>
                Android
              </Box>
            </Typography>
          </Box>

          <Stack
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Box marginRight={{ md: "20px" }}>
              <ButtonPrimary
                text="Download"
                link="/download"
                width={100}
                height={31}
              />
            </Box>
            <Box
              component="img"
              src={qrcode}
              alt="App Preview"
              sx={{ width: "100%", maxWidth: 116 }}
            />
          </Stack>
        </Stack>

        {/* iOS Section */}
        <Stack
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          <Box
            display="flex"
            flexDirection="row"
            marginBottom={{ xs: "15px", md: "0px" }}
          >
            <IosIcon />
            <Typography>
              1z wallet for&nbsp;
              <Box fontWeight="bold" sx={{ display: "inline-block" }}>
                IOS
              </Box>
            </Typography>
          </Box>

          <Stack
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Box marginRight={{ md: "20px" }}>
              <ButtonPrimary
                text="Download"
                link="/download"
                width={100}
                height={31}
              />
            </Box>
            <Box
              component="img"
              src={qrcode}
              alt="App Preview"
              sx={{ width: "100%", maxWidth: 116 }}
            />
          </Stack>
        </Stack>
        <Typography>
          We are actively working on expanding 1z Wallet to other platforms,
          including a desktop application for Windows and browser extensions.
          These upcoming versions will ensure seamless access to your Bitcoin
          wallet anytime, anywhere.
        </Typography>
      </Stack>
    </>
  );
};

export default DownloadPage;
