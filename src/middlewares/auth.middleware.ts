import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function auth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.auth;
  if (!token) {
    res.status(httpStatus.UNAUTHORIZED).send("No token");
  }
  
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).send(error.message);
  }
}
