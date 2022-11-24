// TODO: extract to common package and share betwen frontend and API?
export type Product = {
  id: string;
  name: string;
  price: number;
};

// TODO: move it to ENV vars?
const BASE_PATH = "http://localhost:5000/api/v1";

export function fetchProducts(): Promise<Response> {
  return fetch(`${BASE_PATH}/products`);
}

export function createProduct(attributes: {
  name: string;
  price: number;
}): Promise<Response> {
  return fetch(`${BASE_PATH}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attributes),
  });
}

export function updateProduct(
  id: string,
  attributes: {
    name: string;
    price: number;
  }
): Promise<Response> {
  return fetch(`${BASE_PATH}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attributes),
  });
}

export function deleteProduct(id: string): Promise<Response> {
  return fetch(`${BASE_PATH}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
