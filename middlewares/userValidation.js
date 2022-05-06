import joi from "joi";

export async function userValidation(req, res) {
    userSchema = joi.string().required();
	const validation = userSchema.validate(req.headers);
  if (validation.error) {
    return res.sendStatus(422);
  }
  next();
}