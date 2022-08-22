import joi from "joi"

import { createUser } from "../../services/authService.js"

const signUpSchema = joi.object<createUser>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    pictureURL: joi.string().uri(),
})

export default signUpSchema