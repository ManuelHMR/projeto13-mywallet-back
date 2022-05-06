import joi from "joi";

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/).required(),
  password: joi.string().required()
});

export async function userValidation(req, res) {
  userSchema = joi.string().required();
	const validation = userSchema.validate(req.headers);
  if (validation.error) {
    return res.sendStatus(422);
  }
  next();
};

export async function signUpValidation (req, res){
  const validation = userSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(422);
  }
  next();
}