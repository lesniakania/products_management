import express from "express";
import cors from "cors";
import {
  Index as ProductsIndex,
  Create as ProductsCreate,
  Update as ProductsUpdate,
  Delete as ProductsDelete,
} from "./controllers/ProductsController";
import { Db, MongoClient } from "mongodb";

const DB_NAME = "products_management";
// TODO: take it from ENV (make sure it's passed properly from docker-compose.yml)
const uri = "mongodb://ania:test@mongodb:27017";
const client = new MongoClient(uri);

client
  .connect()
  .then(() => {
    console.log("Database connection successfully established");
    console.log("Setting up the app...");
    const db = client.db(DB_NAME);
    setupApp(db);
  })
  .catch((e) => {
    console.error({ stack: e.stack }, "Database connection failed");
  });

const setupApp = (db: Db) => {
  const port: number = Number(process.env.PORT) || 5000;
  const app: express.Express = express();

  app.use(cors());
  app.use(express.json());

  app.listen(port, () => {
    console.log(`API is running on port: ${port}`);
  });

  app.get("/api/v1/products", ProductsIndex(db));
  app.post("/api/v1/products", ProductsCreate(db));
  app.put("/api/v1/products/:id", ProductsUpdate(db));
  app.delete("/api/v1/products/:id", ProductsDelete(db));
};
