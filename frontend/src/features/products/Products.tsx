import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectProducts,
  selectProductsStatus,
  fetchProductsAsync,
  ProductStatus,
} from "./productsSlice";
import { Product } from "./productsAPI";

export function Products() {
  const products: Product[] = useAppSelector(selectProducts);
  const status: ProductStatus = useAppSelector(selectProductsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <Box
      padding={10}
      sx={{
        flex: 0.5,
        bgcolor: "background.paper",
      }}
    >
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
            <AddIcon fontSize="large" />
          </Button>
        </ListItemIcon>
      </ListItem>
      <Divider />
      <List>
        {products.map((product) => (
          <ListItem disablePadding key={`product-${product.id}`}>
            <ListItemButton>
              <ListItemText primary={product.name} />
              <ListItemIcon>{`${product.price} EUR`}</ListItemIcon>
              <Button>
                <EditIcon fontSize="small" />
              </Button>
              <Button>
                <DeleteIcon fontSize="small" />
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
