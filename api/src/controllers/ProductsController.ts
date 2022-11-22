import { Request, Response, NextFunction } from "express";

export const Index = (_req: Request, res: Response, _next: NextFunction) => {
  // TODO: take it from DB
  const products: Product[] = [
    { name: "Pencil", price: 1.5 },
    { name: "Eraser", price: 0.5 },
  ];

  res.json(products);
};
