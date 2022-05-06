import express from "express";
import { signIn, signUp } from "../controllers/sessionControllers.js";
import { userValidation, signUpValidation } from "../middlewares/userValidation.js";

const sessionRouter = express.Router();

sessionRouter.post("/sign-in",userValidation, signIn);
sessionRouter.post("/sign-up",userValidation, signUpValidation, signUp);

export default sessionRouter;