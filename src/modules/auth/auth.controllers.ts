import { UserSigninDTO } from "./dtos/userSignin.dto";
import authServices from "./auth.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function signin(req: Request, res: Response) {
  const user = req.body as UserSigninDTO;
  try {
    const token = await authServices.signin(user);
    return res.status(httpStatus.OK).cookie('auth', token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000
    }).send('Login bem sucedido');
  } catch (error) {
    console.log(error);
    if (error.name === 'UnauthorizedError') {
      return res.status(httpStatus.UNAUTHORIZED).send(error.message);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}