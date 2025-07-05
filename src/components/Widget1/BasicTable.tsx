import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  id: number,
  name: string,
  price: string,
  changes: number,
  chart: string
) {
  return { id, name, price, changes, chart };
}

const rows = [
  createData(1, "Bitcoin", "32,554.32", +1.21, "Chart"),
  createData(2, "Etherume", "32,554.32", +0.87, "Chart"),
  createData(3, "Ripple", "32,554.32", +1.42, "Chart"),
];

export function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "transparent",
        color: "yellow",
        border: "1px solid #fff",
        borderRadius: "30px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#fff" }}>#</TableCell>
            <TableCell sx={{ color: "#fff" }} align="right">
              Name
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="right">
              Price
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="right">
              24h changes
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="right">
              chart
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ color: "#fff" }} component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                {row.name}
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                {row.price}
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                {row.changes}
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                {row.chart}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
