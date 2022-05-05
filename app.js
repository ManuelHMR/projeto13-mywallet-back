import express from "express";
import cors from "cors"; // DELETAR NO DEPLOY

import { signIn, signUp } from "./controllers/sessionControllers.js";
import { getBalance, postBalance, deleteBalance, putBalance } from "./controllers/balanceControllers.js"

const app = express();
app.listen(5000);
app.use(express.json());
app.use(cors()); // DELETAR NO DEPLOY

app.post("/sign-in",signIn);
app.post("/sign-up", signUp);

app.get("/balance", getBalance);
app.post("/balance", postBalance);
app.delete("/balance", deleteBalance);
app.put("/balance", putBalance);