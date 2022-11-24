import {
  ActionReducerMapBuilder,
  AnyAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "./productsAPI";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsAPI";

export type ProductStatus = "idle" | "loading" | "failed";
export interface ProductsState {
  value: Product[];
  status: ProductStatus;
}

const initialState: ProductsState = {
  value: [],
  status: "idle",
};

// TODO: handle response errors
export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProducts();
    const json = await response.json();
    return json;
  }
);

// TODO: handle response errors
export const createProductAsync = createAsyncThunk(
  "products/createProduct",
  async (attributes: { name: string; price: number }) => {
    const response = await createProduct(attributes);
    const json = await response.json();
    return json;
  }
);

// TODO: handle response errors
export const updateProductAsync = createAsyncThunk(
  "products/updateProduct",
  async (params: { id: string; name: string; price: number }) => {
    const { id, ...attributes } = params;
    const response = await updateProduct(id, attributes);
    const json = await response.json();
    return json;
  }
);

// TODO: handle response errors
export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (params: { id: string; name: string; price: number }) => {
    const { id } = params;
    await deleteProduct(id);
    return { id };
  }
);

export const extraReducers = (
  builder: ActionReducerMapBuilder<ProductsState>
) => {
  builder
    .addCase(fetchProductsAsync.pending, (state: ProductsState) => {
      state.status = "loading";
    })
    .addCase(
      fetchProductsAsync.fulfilled,
      (state: ProductsState, action: AnyAction) => {
        state.status = "idle";
        state.value = action.payload;
      }
    )
    .addCase(fetchProductsAsync.rejected, (state: ProductsState) => {
      state.status = "failed";
    })
    .addCase(
      createProductAsync.fulfilled,
      (state: ProductsState, action: AnyAction) => {
        const newProducts = [...state.value, action.payload];
        state.value = newProducts;
      }
    )
    .addCase(
      updateProductAsync.fulfilled,
      (state: ProductsState, action: AnyAction) => {
        const updatedProduct = action.payload;
        const oldProductIndex = state.value.findIndex(
          (product) => product.id === updatedProduct.id
        );
        const newProducts = [
          ...state.value.slice(0, oldProductIndex),
          action.payload,
          ...state.value.slice(oldProductIndex + 1),
        ];
        state.value = newProducts;
      }
    )
    .addCase(
      deleteProductAsync.fulfilled,
      (state: ProductsState, action: AnyAction) => {
        const deletedProduct = action.payload;
        const oldProductIndex = state.value.findIndex(
          (product) => product.id === deletedProduct.id
        );
        const newProducts = [
          ...state.value.slice(0, oldProductIndex),
          ...state.value.slice(oldProductIndex + 1),
        ];
        state.value = newProducts;
      }
    );
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: extraReducers,
});

export const selectProducts = (state: RootState) => state.products.value;
export const selectProductsStatus = (state: RootState) => state.products.status;

export default productsSlice.reducer;
