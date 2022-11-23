import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ProductStatus } from "./productsSlice";

export function Header(props: {
  addProduct: () => void;
  status: ProductStatus;
}) {
  const { addProduct, status } = props;

  return (
    <Box>
      {status === "loading" ? "Loading products..." : ""}
      <ListItem disablePadding>
        <ListItemText
          primary={
            <Typography variant="h4" gutterBottom>
              Products
            </Typography>
          }
        />
        <ListItemIcon>
          <Button>
            <AddIcon fontSize="large" onClick={addProduct} />
          </Button>
        </ListItemIcon>
      </ListItem>
    </Box>
  );
}
