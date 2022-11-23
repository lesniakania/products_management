// TODO: extract to common package and share betwen frontend and API?
export type Product = {
  name: string;
  price: number;
};

// TODO: move it to ENV vars?
const BASE_PATH = "http://localhost:5000";

export function fetchProducts(): Promise<Response> {
  return fetch(`${BASE_PATH}/products`);
}
