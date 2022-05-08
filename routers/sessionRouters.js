import express from "express";

import { signIn, signUp } from "../controllers/sessionControllers.js";
import { signUpValidation } from "../middlewares/signUpValidation.js";

const sessionRouter = express.Router();

sessionRouter.post("/signin", signIn);
sessionRouter.post("/signup", signUpValidation, signUp);

export default sessionRouter;