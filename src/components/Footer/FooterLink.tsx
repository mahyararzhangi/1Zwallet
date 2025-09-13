import { List, Typography, Grid } from "@mui/material";
import FooterLinks from "./footerLinks";

const FooterLink = (props) => {
  const { footerLinks } = props;
  return (
    <>
      {footerLinks?.map((item, itemIndex) => {
        return (
          <Grid
            item
            size={{ xs: 12, md: 2 }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
            key={itemIndex}
          >
            <Typography variant="h6" fontSize="19px" mb={2}>
              {item.header}
            </Typography>
            <List dense disablePadding className="footer-links">
              <FooterLinks item={item} />
            </List>
          </Grid>
        );
      })}
    </>
  );
};

export default FooterLink;
