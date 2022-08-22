import { authRepository } from "../repositories/authRepository.js"
import { createUser } from "../services/authService.js"

export async function createAccount(body: createUser) {
    if (!body.pictureURL) {
        body.pictureURL = null
    }

    const insertUser = await authRepository.userSignUp(
        body.name,
        body.email,
        body.password,
        body.pictureURL
    )
}