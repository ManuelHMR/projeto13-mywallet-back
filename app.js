import express from "express";
import cors from "cors"; //DELETAR NO DEPLOY

import db from "./db.js";

const app = express();
app.listen(5000);
app.use(express.json());
app.use(cors()); // DELETAR NO DEPLOY

app.post("/sign-in")
app.post("/sign-up")
app.get("/balance")
app.post("/balance")
app.delete("/balance")
app.put("/balance")