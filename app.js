import express from "express";
import cors from "cors"; // DELETAR NO DEPLOY

import sessionRouter from "./routers/sessionRouters.js";
import balanceRouter from "./routers/balanceRouters.js";

const app = express();
app.listen(5000);
app.use(express.json());
app.use(cors()); // DELETAR NO DEPLOY

app.use(sessionRouter);
app.use(balanceRouter);