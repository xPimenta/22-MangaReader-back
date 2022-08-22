import bcrypt from "bcrypt"

import { prisma } from "../config/database.js"

export const authRepository = {
    async checkIfEmailExists(email: string) {
        const exists = await prisma.users.findUnique({
            where: {
                email,
            },
        })
        return exists
    },

    async userSignUp(
        name: string,
        email: string,
        password: string,
        pictureURL: string | null
    ) {
        const passwordHash = bcrypt.hashSync(password, 10)

        await prisma.users.create({
            data: {
                name,
                email,
                password: passwordHash,
                pictureURL,
            },
        })
    },

    // async userSignIn(name: string, userId: number) {
    //     await prisma.sessions.create({
    //         data: {
    //             userId,
    //             name,
    //         },
    //     })
    // },

    // async checkTokenOwnership(name: string) {
    //     const exists = await prisma.sessions.findFirst({
    //         where: {
    //             name,
    //         },
    //     })
    //     return exists
    // },

    async userData(userId: number) {
        const user = await prisma.users.findFirst({
            where: { id: userId },
            select: { id: true, name: true, pictureURL: true },
        })

        return user
    },
}