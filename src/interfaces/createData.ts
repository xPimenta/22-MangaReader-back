import { users } from "@prisma/client";
  
  export type CreateUser = Omit<users, "id" | "createdAt">;
