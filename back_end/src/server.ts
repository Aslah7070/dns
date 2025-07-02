import express from "express"
import { env } from "process";
import { connectDb } from "./configs/mongo.config";
import cors from "cors"
import { menu } from "./routes/menu.route";

const app=express()

app.use(
  cors({
    origin: env.CLIENT_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
   
  })
);
app.use(express.json())

app.use('/api/menu',menu)

connectDb();

app.listen(env.PORT, () => console.log(`Server started at ${env.PORT} `));
