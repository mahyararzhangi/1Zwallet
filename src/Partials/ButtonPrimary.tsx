import Typography from "@mui/material/Typography";

interface ButtonPrimaryProps {
  text: string;
  link: string;
  width?: number;
  height?: number;
}

export const ButtonPrimary = ({
  text,
  link,
  width,
  height,
}: ButtonPrimaryProps) => {
  return (
    <Typography
      component="a"
      href={link}
      sx={{
        width,
        height,
        display: "inline-block",
        textDecoration: "none",
        backgroundColor: "#0267FF",
        color: "#fff",
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
