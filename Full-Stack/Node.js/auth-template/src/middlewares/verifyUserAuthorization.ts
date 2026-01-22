import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../utils/AppError";

export function verifyUserAuthorization(role: string[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user || !role.includes(request.user?.role)) {
      throw new AppError("User not authorized", 401);
    }
    next();
  };
}
