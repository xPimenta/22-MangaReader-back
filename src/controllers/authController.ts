import { Request, Response } from "express";

import * as userService from ".././services/userService";

export async function signup(req: Request, res: Response) {
    console.log("SIGNUP", req.body);
  await userService.create(req.body);
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await userService.login({ email, password });
  res.send(user);
}