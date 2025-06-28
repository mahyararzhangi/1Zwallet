import Typography from "@mui/material/Typography";

interface ButtonSecondaryProps {
  text: string;
  link: string;
  width?: number | string;
  height?: number | string;
}

export const ButtonSecondary = ({
  text,
  link,
  width,
  height,
}: ButtonSecondaryProps) => {
  return (
    <Typography
      component="a"
      href={link}
      sx={{
        width,
        height,
        display: "inline-block",
        textDecoration: "none",
        backgroundColor: "transparent",
        color: "#8683A4",
        borderRadius: "50px",
        textAlign: "center",
        lineHeight: 2,
        marginX: 1,
        padding: "8px 21px",
      }}
    >
      {text}
    </Typography>
  );
};
