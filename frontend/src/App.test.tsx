import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./features/products/productsSlice";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [{ id: "ABC", name: "Pencil", price: 1.5 }],
    status: "idle",
  },
  reducers: {},
  extraReducers: extraReducers,
});
export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

test("renders App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const title = screen.getAllByText(/Products/i);
  expect(title[0]).toBeInTheDocument();
});
