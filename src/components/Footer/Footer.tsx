import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ButtonPrimary } from "../../Partials/ButtonPrimary";
import SocialLinks from "./SocialLinks";
import "./footer.css";

const Footer = () => {
  return (
    <Stack>
      <Box mb={5}>
        <Grid container spacing={2}>
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
            <Typography
              variant="body2"
              textAlign={{ xs: "center", md: "left" }}
            >
              A specialized solution for managing Bitcoin assets, designed with
              a bank-like structure to provide secure storage, fast transfers,
              and reliable receipt.
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
                      height: "42px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#f2f2f2",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "blue",
                    },
                  },
                  "& input::placeholder": {
                    color: "#E5F2EF8A", // رنگ placeholder
                  },
                }}
              />
              <ButtonPrimary
                sx={{ lineHeight: "1.5" }}
                text="Subscribe"
                link="https://www.google.com"
                height={22}
              />
            </Box>
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 2 }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="h6" fontSize="19px" mb={2}>
              Company
            </Typography>
            <List dense disablePadding className="footer-links">
              <ListItem component="a" href="/about" button>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem component="a" href="/contact" button>
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem component="a" href="/affiliates" button>
                <ListItemText primary="Affiliates" />
              </ListItem>
              <ListItem component="a" href="/careers" button>
                <ListItemText primary="Careers" />
              </ListItem>
              <ListItem component="a" href="/reviews" button>
                <ListItemText primary="Reviews" />
              </ListItem>
            </List>
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 2 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="h6" fontSize="19px" mb={2}>
              Products
            </Typography>
            <List dense disablePadding className="footer-links">
              <ListItem component="a" href="/buy" button>
                <ListItemText primary="Buy" />
              </ListItem>
              <ListItem component="a" href="/sell" button>
                <ListItemText primary="Sell" />
              </ListItem>
              <ListItem component="a" href="/swap" button>
                <ListItemText primary="Swap" />
              </ListItem>
              <ListItem component="a" href="/receive" button>
                <ListItemText primary="Receive" />
              </ListItem>
              <ListItem component="a" href="/gateway" button>
                <ListItemText primary="Gateway" />
              </ListItem>
            </List>
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 2 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="h6" fontSize="19px" mb={2}>
              Learn
            </Typography>
            <List dense disablePadding className="footer-links">
              <ListItem component="a" href="/blog" button>
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem component="a" href="/support" button>
                <ListItemText primary="Support" />
              </ListItem>
              <ListItem component="a" href="/pricing" button>
                <ListItemText primary="Pricing" />
              </ListItem>
              <ListItem component="a" href="/community" button>
                <ListItemText primary="Community" />
              </ListItem>
              <ListItem component="a" href="/status" button>
                <ListItemText primary="Status" />
              </ListItem>
            </List>
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 2 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="h6" fontSize="19px" mb={2}>
              Legal
            </Typography>
            <List dense disablePadding className="footer-links">
              <ListItem component="a" href="/aml-policy" button>
                <ListItemText primary="AML Policy" />
              </ListItem>
              <ListItem component="a" href="/privacy-policy" button>
                <ListItemText primary="Privacy Policy" />
              </ListItem>
              <ListItem component="a" href="/terms-of-service" button>
                <ListItemText primary="Terms of Service" />
              </ListItem>
              <ListItem component="a" href="/cookie-policy" button>
                <ListItemText primary="Cookie Policy" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* lower footer */}
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
    </Stack>
  );
};

export default Footer;
