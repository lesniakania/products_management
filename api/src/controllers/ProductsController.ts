import { Request, Response, NextFunction } from "express";
import { Db, WithId, Document, ObjectId } from "mongodb";
import { Product } from "../models/Product";

const COLLECTION_NAME = "products";

const present = (dbProduct: WithId<Document>): Product => {
  return {
    id: String(dbProduct["_id"]),
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
    const product = {
      name: json.name,
      price: json.price,
    };
    try {
      const insertedProduct = await productsCollection.insertOne(product);
      res.status(201).json({
        ...{ id: insertedProduct.insertedId },
        name: json.name,
        price: json.price,
      });
    } catch (error) {
      res.status(400).json({ error: "Failed to save record" });
    }
  };
};

export const Update = (db: Db) => {
  return async (req: Request, res: Response, _next: NextFunction) => {
    const productsCollection = db.collection(COLLECTION_NAME);
    const id = req.params.id;
    const json = await req.body;
    const updatedProduct = {
      name: json.name,
      price: json.price,
    };

    try {
      const r = await productsCollection.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: updatedProduct,
        }
      );

      res.status(200).json({
        id,
        name: json.name,
        price: json.price,
      });
    } catch (error) {
      res.status(400).json({ error: "Failed to save record" });
    }
  };
};

export const Delete = (db: Db) => {
  return async (req: Request, res: Response, _next: NextFunction) => {
    const productsCollection = db.collection(COLLECTION_NAME);
    const id = req.params.id;
    try {
      await productsCollection.deleteMany({ _id: new ObjectId(id) });
      res.json({});
    } catch (error) {
      res.status(400).json({ error: "Failed to delete record" });
    }
  };
};
