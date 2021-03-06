import joi from "joi";

import db from "../db.js";
const usersCollection = db.collection("usersCollection");

export async function signUpValidation (req, res, next){
  const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/).required(),
    password: joi.string().required()
  });
  const validation = userSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }
  const uniqueEmailValidation = await usersCollection.findOne({email: req.body.email});
  if(uniqueEmailValidation){
    return res.sendStatus(409)
  }
  next();
}