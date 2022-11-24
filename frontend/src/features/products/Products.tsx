import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Header } from "./Header";
import { NewProductForm } from "./NewProductForm";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectProducts,
  selectProductsStatus,
  fetchProductsAsync,
  createProductAsync,
  updateProductAsync,
  deleteProductAsync,
  ProductStatus,
} from "./productsSlice";
import { Product } from "./productsAPI";
import { ProductItem } from "./ProductItem";

export function Products() {
  const products: Product[] = useAppSelector(selectProducts);
  const status: ProductStatus = useAppSelector(selectProductsStatus);
  const [newProductClicked, setNewProductClicked] = useState(false);
  const dispatch = useAppDispatch();

  const addProduct = () => {
    setNewProductClicked(true);
    return;
  };

  const saveProduct = (attributes: { name: string; price: number }) => {
    setNewProductClicked(false);
    dispatch(createProductAsync(attributes));
    return;
  };

  const cancelAddProduct = () => {
    setNewProductClicked(false);
    return;
  };

  const updateProduct = (product: Product) => {
    dispatch(updateProductAsync(product));
    return;
  };

  const deleteProduct = (product: Product) => {
    dispatch(deleteProductAsync(product));
    return;
  };

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
      <Header addProduct={addProduct} status={status} />
      <Divider />
      <List>
        {newProductClicked ? (
          <NewProductForm
            saveProduct={saveProduct}
            cancelAddProduct={cancelAddProduct}
          />
        ) : null}
        {products.map((product) => (
          <ProductItem
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
            product={product}
          />
        ))}
      </List>
    </Box>
  );
}
