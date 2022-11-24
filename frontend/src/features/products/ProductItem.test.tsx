import { fireEvent, render } from "@testing-library/react";
import { ProductItem } from "./ProductItem";

const product = { id: "ABC", name: "Pencil", price: 2 };
const updateProduct = jest.fn();
const deleteProduct = jest.fn();

test("renders ProductItem", async () => {
  const component = render(
    <ProductItem
      product={product}
      updateProduct={updateProduct}
      deleteProduct={deleteProduct}
    />
  );

  const name = await component.getByText("Pencil");
  const price = await component.getByText("2 EUR");

  expect(name).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});

test("renders invoke updateProduct on save clicked", async () => {
  const component = render(
    <ProductItem
      product={product}
      updateProduct={updateProduct}
      deleteProduct={deleteProduct}
    />
  );

  const editButton = component.getByTestId("EditIcon");
  fireEvent.click(editButton);

  const saveButton = await component.getByText("Save");

  expect(saveButton).toBeInTheDocument();
  expect(component.getByTestId("CancelIcon")).toBeInTheDocument();

  fireEvent.click(saveButton);
  expect(updateProduct).toHaveBeenCalled();
});
