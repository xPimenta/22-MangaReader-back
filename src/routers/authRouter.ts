import { Router } from "express";

import * as schema from ".././schemas/authSchemas";
import { validateSchema  }from ".././middlewares/validateSchema";

import * as controller from ".././controllers/authController";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  validateSchema(schema.registerSchema),
  controller.signup
);

authRouter.post(
  "/sign-in",
  validateSchema(schema.loginSchema),
  controller.signin
);

authRouter.post("/validateToken",  controller.signin);

export default authRouter;