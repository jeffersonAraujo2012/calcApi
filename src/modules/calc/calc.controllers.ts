import { Request, Response } from "express";
import httpStatus from "http-status";
import * as math from "mathjs";

export async function exec(req: Request, res: Response) {
  const expression = req.body.expression;
  try {
    const twoDecimalPartsRegex = /\d*\.\d*\./gm;
    if (twoDecimalPartsRegex.test(expression))
      throw {message: "The expression contains numbers with two decimal separators.", status: 400};
    
    const divisionByZeroRegex = /(\/0)(?!(0*\.?0*?[123456789]))/g
    if (divisionByZeroRegex.test(expression))
      throw {message: "Impossible to divide by zero!", status: 400};
    
    return res.status(httpStatus.OK).send({result: math.evaluate(expression)});
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).send(error.message);
  }
}