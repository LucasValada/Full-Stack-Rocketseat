import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";
import { appError } from "@/utils/appError";

interface Token {
  role: string;
  sub: string;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new appError("JWT token is missing", 401);
    }

    const [, token] = authHeader.split(" ");

    const { sub: user_id, role } = verify(
      token,
      authConfig.jwt.secret,
    ) as Token;

    request.user = { id: user_id, role };

    return next();
  } catch (e) {
    throw new appError("Invalid JWT token", 401);
  }
}
