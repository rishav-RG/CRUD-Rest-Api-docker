import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  }

  next(); // move to next middleware or controller
};

export default validateUser;
