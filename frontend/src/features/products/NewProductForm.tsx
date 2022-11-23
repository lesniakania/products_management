import ListItem from "@mui/material/ListItem";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemIcon";

export function NewProductForm(props: {
  saveProduct: () => void;
  cancelAddProduct: () => void;
}) {
  const { saveProduct, cancelAddProduct } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <TextField label="Name" />
        <TextField label="Price" />
        <Button onClick={saveProduct}>Save</Button>
        <Button color="primary" onClick={cancelAddProduct}>
          <CancelIcon />
        </Button>
      </ListItemButton>
    </ListItem>
  );
}
