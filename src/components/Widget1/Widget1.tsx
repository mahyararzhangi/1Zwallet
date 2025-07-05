import { Grid, Typography } from "@mui/material";
import { BasicTable } from "./BasicTable";

const Widget1 = () => {
  return (
    <>
      <Grid container spacing={2} mb={10}>
        <Grid
          item
          size={{ xs: 12, md: 4 }}
          margin=" auto 0"
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography variant="h3">Market Trend</Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 8 }}>
          <BasicTable />
        </Grid>
      </Grid>
      {/* <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Market Trend</Typography>
        <Box>
          <BasicTable />
        </Box>
      </Stack> */}
    </>
  );
};

export default Widget1;
