import { authRepository } from "../repositories/authRepository.js"

export async function ensureEmailIsNotInUse(email: string) {
    const exists = await authRepository.checkIfEmailExists(email)
    if (exists)
        throw { type: "emailAlreadyInUse", message: "Email already in use!" }
}