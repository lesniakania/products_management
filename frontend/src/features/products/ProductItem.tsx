import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import { Product } from "./productsAPI";

export function ProductItem(props: {
  updateProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
  product: Product;
}) {
  const { updateProduct, deleteProduct, product } = props;

  const [editProductClicked, setEditProductClicked] = useState(false);

  let name = product.name;
  let price = product.price;

  const onNameChanged = (event: { target: { value: any } }) => {
    name = event.target.value;
  };
  const onPriceChanged = (event: { target: { value: any } }) => {
    price = Number(event.target.value);
  };

  const onSaveClicked = () => {
    updateProduct({ ...product, name, price });
    setEditProductClicked(false);
    return;
  };

  const editProduct = () => {
    setEditProductClicked(true);
    return;
  };

  const cancelEditProduct = () => {
    setEditProductClicked(false);
    return;
  };

  return (
    <ListItem disablePadding>
      {editProductClicked ? (
        <ListItemButton>
          <ListItemButton>
            <TextField
              label="Name"
              defaultValue={product.name}
              onChange={onNameChanged}
            />
            <TextField
              label="Price"
              defaultValue={product.price}
              onChange={onPriceChanged}
            />
            <Button onClick={onSaveClicked}>Save</Button>
            <Button color="primary" onClick={cancelEditProduct}>
              <CancelIcon />
            </Button>
          </ListItemButton>
        </ListItemButton>
      ) : (
        <ListItemButton>
          <ListItemText primary={product.name} />
          <ListItemIcon>{`${product.price} EUR`}</ListItemIcon>
          <Button>
            <EditIcon fontSize="small" onClick={editProduct} />
          </Button>
          <Button>
            <DeleteIcon
              fontSize="small"
              onClick={() => deleteProduct(product)}
            />
          </Button>
        </ListItemButton>
      )}
    </ListItem>
  );
}
