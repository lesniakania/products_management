import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "./productsAPI";
import { fetchProducts } from "./productsAPI";

export type ProductStatus = "idle" | "loading" | "failed";
export interface ProductsState {
  value: Product[];
  status: ProductStatus;
}

const initialState: ProductsState = {
  value: [],
  status: "idle",
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProducts();
    const json = await response.json();
    return json;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectProducts = (state: RootState) => state.products.value;
export const selectProductsStatus = (state: RootState) => state.products.status;

export default productsSlice.reducer;
