import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectProduct, fetchProductsAsync } from "./productsSlice";
import { Product } from "./productsAPI";

export function Products() {
  const products: Product[] = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch, products]);

  return (
    <div>
      {products.map((product) => (
        <div className="row">
          <span className="value">{product.name}</span>
          <span className="value">{product.price}</span>
        </div>
      ))}
    </div>
  );
}
