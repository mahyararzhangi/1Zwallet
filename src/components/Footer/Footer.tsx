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

const Footer = () => {
  return (
    <Stack>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography variant="h6" gutterBottom>
              1z Wallet
            </Typography>
            <Typography variant="body2" paragraph>
              A specialized solution for managing Bitcoin assets, designed with
              a bank-like structure to provide secure storage, fast transfers,
              and reliable receipt.
            </Typography>
            <Box display="flex" gap={1} mt={2}>
              <TextField label="Your Name" variant="outlined" size="small" />
              <ButtonPrimary
                text="Subscribe"
                link="https://www.google.com"
              ></ButtonPrimary>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <List dense disablePadding>
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

          <Grid item md={2}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <List dense disablePadding>
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

          <Grid item md={2}>
            <Typography variant="h6" gutterBottom>
              Learn
            </Typography>
            <List dense disablePadding>
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

          <Grid item md={2}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <List dense disablePadding>
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
      <Box>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography>2025 1z wallet. All rights reserved</Typography>
          <Box>
            <SocialLinks />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Footer;
