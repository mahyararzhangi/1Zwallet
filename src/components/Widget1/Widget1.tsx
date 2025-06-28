import { Box, Stack, Typography } from "@mui/material";
import { BasicTable } from "./BasicTable";

const Widget1 = () => {
  return (
    <>
      <Stack
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
      </Stack>
    </>
  );
};

export default Widget1;
