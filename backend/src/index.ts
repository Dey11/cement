import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { connectToDb } from "./db";
import router from "./routes/authRouter";

const app: Express = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

connectToDb(process.env.URI!).then(() => {
  console.log("MongoDB connected");
});

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/auth", router);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
