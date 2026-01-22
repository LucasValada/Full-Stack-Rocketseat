import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { appError } from "@/utils/appError";

export function verifyUserAuthorization(role: string[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user) {
      throw new appError("User not authenticated", 401);
    }

    if (!role.includes(request.user.role)) {
      throw new appError("User not authorized", 403);
    }

    return next();
  };
}
