import { Request, Response, NextFunction } from "express";
import { Db, WithId, Document } from "mongodb";
import { Product } from "../models/Product";

const COLLECTION_NAME = "products";

const present = (dbProduct: WithId<Document>): Product => {
  return {
    id: dbProduct["id"],
    name: dbProduct["name"],
    price: dbProduct["price"],
  };
};

export const Index = (db: Db) => {
  return async (_req: Request, res: Response, _next: NextFunction) => {
    const productsCollection = db.collection(COLLECTION_NAME);
    const products = await productsCollection.find({}).toArray();
    res.json(products.map(present));
  };
};

export const Create = (db: Db) => {
  return async (req: Request, res: Response, _next: NextFunction) => {
    const productsCollection = db.collection(COLLECTION_NAME);
    const json = await req.body;
    await productsCollection.insertOne({
      id: json.id,
      name: json.name,
      price: json.price,
    });
    res.json({});
  };
};
