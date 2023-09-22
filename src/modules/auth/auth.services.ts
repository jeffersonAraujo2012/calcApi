import { unauthorizedError } from "@/errors";
import { UserSigninDTO } from "./dtos/userSignin.dto";
import jwt from "jsonwebtoken";

async function signin(user: UserSigninDTO): Promise<string> {
  const userTest = {
    user: process.env.USER_TEST || "user",
    password: process.env.USER_TEST_PASSWORD || "123456",
  };

  const passwordIsCorrect = user.password === userTest.password;

  if (!passwordIsCorrect) {
    throw unauthorizedError("Usuário e/ou senha incorretos");
  }

  const token = jwt.sign({ userId: userTest.user }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  });

  return token;
}

const authServices = {
  signin,
};

export default authServices;
