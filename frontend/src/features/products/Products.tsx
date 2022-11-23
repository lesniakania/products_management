import React, { useEffect } from "react";

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
    <div>
      {status === "loading" ? "Loading products..." : ""}
      {products.map((product) => (
        <div className="row">
          <span className="value">{product.name}</span>
          <span className="value">{product.price}</span>
        </div>
      ))}
    </div>
  );
}
