import { prisma } from "@config/database";

import { CreateUser } from './../interfaces/createData.js';


export async function search(param: string, value: string | number) {
  return prisma.users.findFirst({
    where: {
      [param]: value,
    },
  });
}

export async function create(user: CreateUser) {
  return prisma.users.create({
    data: {
      ...user,
    },
  });
}

export async function update(userId: number, data: any) {
  return prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      ...data,
    },
  });
}
