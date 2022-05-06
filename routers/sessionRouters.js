import express from "express";
import { signIn, signUp } from "./controllers/sessionControllers.js";

const sessionRouter = express.Router();

sessionRouter.post("/sign-in", signIn);
sessionRouter.post("/sign-up", signUp);

export default sessionRouter;