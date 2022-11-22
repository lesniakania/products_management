import express from "express";
import cors from "cors";

const port: number = Number(process.env.PORT) || 5000;
const app: express.Express = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
