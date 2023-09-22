import Joi from "joi";
import { UserSigninDTO } from '@/modules/auth/dtos/userSignin.dto';

const signinSchema: Joi.ObjectSchema<UserSigninDTO> = Joi.object({
  user: Joi.string().required(),
  password: Joi.string().required(),
})

export default signinSchema;