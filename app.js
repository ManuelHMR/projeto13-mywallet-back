import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // DELETAR NO DEPLOY

dotenv.config();

import sessionRouter from "./routers/sessionRouters.js";
import balanceRouter from "./routers/balanceRouters.js";

const app = express();

const port = process.env.PORT || 5000;


app.use(cors()); // DELETAR NO DEPLOY
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(sessionRouter);
app.use(balanceRouter);

app.listen(port);