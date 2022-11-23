// TODO: extract to common package and share betwen frontend and API?
export type Product = {
  name: string;
  price: number;
};

export function fetchProducts() {
  return new Promise<{ data: Product[] }>((resolve) =>
    setTimeout(() => resolve({ data: [{ name: "Pencil", price: 2.5 }] }), 5000)
  );
}
