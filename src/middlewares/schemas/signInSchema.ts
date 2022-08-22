import joi from "joi"

import { userData } from "../../services/authService.js"

const signInSchema = joi.object<userData>({
    email: joi.string().email().required(),
    password: joi.string().required(),
})

export default signInSchema