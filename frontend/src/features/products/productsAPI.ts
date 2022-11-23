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
