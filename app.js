import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // DELETAR NO DEPLOY

dotenv.config();

import sessionRouter from "./routers/sessionRouters.js";
import balanceRouter from "./routers/balanceRouters.js";

const app = express();
app.listen(process.env.PORT );
app.use(express.json());
app.use(cors()); // DELETAR NO DEPLOY

app.use(sessionRouter);
app.use(balanceRouter);