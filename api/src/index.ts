import express from "express";
import cors from "cors";
import { Index as ProductsIndex } from "./controllers/ProductsController";

const port: number = Number(process.env.PORT) || 5000;
const app: express.Express = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`API is running on port: ${port}`);
});

app.get("/products", ProductsIndex);
