import { ListItem, ListItemText } from "@mui/material";

const FooterLinks = (props) => {
  const { item } = props;
  return (
    <>
      {item.links?.map((link, linkIndex) => (
        <ListItem key={linkIndex} component="a" href={link.href} button>
          <ListItemText primary={link.label} />
        </ListItem>
      ))}
    </>
  );
};

export default FooterLinks;
