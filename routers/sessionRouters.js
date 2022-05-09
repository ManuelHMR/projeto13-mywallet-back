import express from "express";

import { signIn, signUp } from "../controllers/sessionControllers.js";
import { signUpValidation } from "../middlewares/signUpValidation.js";
import { signInValidation } from "./../middlewares/signInValidation.js" ;

const sessionRouter = express.Router();

sessionRouter.post("/signin", signInValidation, signIn);
sessionRouter.post("/signup", signUpValidation, signUp);

export default sessionRouter;