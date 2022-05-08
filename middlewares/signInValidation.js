import db from "../db.js";
const sessionsCollection = db.collection("sessionsCollection");

export async function signUpValidation (req, res, next){

  next();
}