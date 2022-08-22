import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { compareSync } from "bcrypt";
import JWTVerify from ".././utils/JWTVerify";
import "dotenv/config";

import { bearerTokenSchema } from "../schemas/authSchemas";

export function validateSchema(schema: Joi.ObjectSchema) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    console.log("validateSchema", req.body);
    const validation = schema.validate(req.body, { abortEarly: false });
    console.log(validation);
    if (validation.error) throw { type: "wrong_schema", message: validation.error.message };

    next();
  };
}

// export async function validateToken (req: Request, _res: Response, next: NextFunction){
//   const error = bearerTokenSchema.validate(req.headers, { abortEarly: false });
//   console.log(error)
//   if (error)
//     return _res.status(401).send("Authorization: Bearer TOKEN header is required");

//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const userData = JWTVerify(token);
//     _res.locals.userData = userData;
//     next();
//   } catch (err) {
//     console.dir(err);
//     _res.status(401).send(err.message);
//   }
// };