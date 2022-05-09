import express from "express";

import { getBalance, postBalance, deleteBalance, putBalance } from "../controllers/balanceControllers.js"
import { tokenValidation } from "../middlewares/tokenValidation.js";

const balanceRouter = express.Router();

balanceRouter.get("/balance", tokenValidation, getBalance);
balanceRouter.post("/balance", postBalance);
balanceRouter.delete("/balance", deleteBalance);
balanceRouter.put("/balance", putBalance);

export default balanceRouter;