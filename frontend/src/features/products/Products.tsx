import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
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
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Divider />
      <List>
        {products.map((product) => (
          <ListItem disablePadding key={`product-${product.id}`}>
            <ListItemButton>
              <ListItemText primary={product.name} />
              <ListItemIcon>{`${product.price} EUR`}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
