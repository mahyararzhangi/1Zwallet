import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Charts } from "../../Partials/Charts";
import { useContext } from "react";
import { MyContext } from "../../Pages/HomePage";
import { Box, Typography } from "@mui/material";
import "./stylesheet.css";

export function BasicTable() {
  const coins = useContext(MyContext);

  if (!Array.isArray(coins)) {
    return <p style={{ color: "#fff" }}>Loading...</p>;
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "transparent",
        color: "yellow",
        border: "1px solid #242938",
        borderRadius: "30px",
        padding: "20px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#fff", border: "none" }}>#</TableCell>
            <TableCell sx={{ color: "#fff", border: "none" }} align="right">
              Name
            </TableCell>
            <TableCell sx={{ color: "#fff", border: "none" }} align="right">
              Price
            </TableCell>
            <TableCell sx={{ color: "#fff", border: "none" }} align="right">
              24h changes
            </TableCell>
            <TableCell sx={{ color: "#fff", border: "none" }} align="right">
              Chart
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.slice(0, 3).map((coin, index) => (
            <TableRow
              key={coin.id ?? index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "#fff", border: "none" }}
                component="th"
                scope="row"
              >
                {index + 1}
              </TableCell>
              <TableCell sx={{ color: "#fff", border: "none" }} align="right">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  {coin.image && (
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        marginRight: "10px",
                        verticalAlign: "top",
                      }}
                    />
                  )}
                  <Typography
                    sx={{ display: "inline-block", marginRight: "10px" }}
                  >
                    {coin.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      display: "inline-block",
                    }}
                  >
                    {coin.symbol}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#fff", border: "none" }} align="right">
                ${coin.current_price.toLocaleString()}
              </TableCell>
              <TableCell sx={{ color: "#fff", border: "none" }} align="right">
                {coin.price_change_percentage_24h > 0
                  ? `+${coin.price_change_percentage_24h.toFixed(2)}%`
                  : `${coin.price_change_percentage_24h.toFixed(2)}%`}
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                align="right"
              >
                <Box sx={{ height: "80px", width: "80px" }}>
                  <Charts symbol={`COINBASE:${coin.symbol.toUpperCase()}USD`} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
