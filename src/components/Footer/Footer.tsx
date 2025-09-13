import { Box, Grid, Stack } from "@mui/material";
import "./footer.css";
import FooterLink from "./FooterLink";
import Subscribe from "./Subscribe";
import LowerFooter from "./LowerFooter";

const Footer = () => {
  const footerLinks = [
    {
      header: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Affiliates", href: "/affiliates" },
        { label: "Careers", href: "/careers" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      header: "Products",
      links: [
        { label: "Buy", href: "/buy" },
        { label: "Sell", href: "/sell" },
        { label: "Swap", href: "/swap" },
        { label: "Receive", href: "/receive" },
        { label: "Gateway", href: "/gateway" },
      ],
    },
    {
      header: "Learn",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" },
        { label: "Pricing", href: "/pricing" },
        { label: "Community", href: "/community" },
        { label: "Status", href: "/status" },
      ],
    },
    {
      header: "Legal",
      links: [
        { label: "AML Policy", href: "/aml-policy" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
      ],
    },
  ];

  return (
    <Stack>
      <Box mb={5}>
        <Grid container spacing={2}>
          <Subscribe />
          <FooterLink footerLinks={footerLinks} />
        </Grid>
      </Box>

      <LowerFooter />
    </Stack>
  );
};

export default Footer;
