import Joi from "joi";
import CalcRequestDTO from "../dtos/calcRequest.dto";

const execCalcSchema: Joi.ObjectSchema<CalcRequestDTO> = Joi.object({
  expression: Joi.string().required(),
});

export default execCalcSchema;
