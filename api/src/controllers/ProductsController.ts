import { Request, Response, NextFunction } from "express";

export const Index = (_req: Request, res: Response, _next: NextFunction) => {
  // TODO: take it from DB
  const products: Product[] = [
    { id: "P001", name: "Pencil", price: 1.5 },
    { id: "P002", name: "Eraser", price: 0.5 },
  ];

  res.json(products);
};
