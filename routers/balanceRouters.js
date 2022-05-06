import express from "express";
import { getBalance, postBalance, deleteBalance, putBalance } from "./controllers/balanceControllers.js"

const balanceRouter = express.Router();

balanceRouter.get("/balance", getBalance);
balanceRouter.post("/balance", postBalance);
balanceRouter.delete("/balance", deleteBalance);
balanceRouter.put("/balance", putBalance);

export default balanceRouter;