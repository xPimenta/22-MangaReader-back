
import jwt from "jsonwebtoken";

export const JWTVerify = (token: any) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export default JWTVerify;