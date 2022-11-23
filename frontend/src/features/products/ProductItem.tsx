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

  const editProduct = () => {
    setEditProductClicked(true);
    return;
  };

  const cancelEditProduct = () => {
    setEditProductClicked(false);
    return;
  };

  return (
    <ListItem disablePadding key={`product-${product.id}`}>
      {editProductClicked ? (
        <ListItemButton>
          <ListItemButton>
            <TextField label="Name" defaultValue={product.name} />
            <TextField label="Price" defaultValue={product.price} />
            <Button onClick={() => updateProduct(product)}>Save</Button>
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
