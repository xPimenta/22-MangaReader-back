import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
});

export const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
  pictureURL: Joi.string().required(),
});

export const bearerTokenSchema = Joi.object({
  authorization: Joi.string()
    .pattern(/^Bearer\s[\w-]*\.[\w-]*\.[\w-]*$/)
    .required(),
}).options({ allowUnknown: true });