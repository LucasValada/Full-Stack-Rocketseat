import { Request, Response, NextFunction } from "express";
import { appError } from "../utils/appError";
import { ZodError } from "zod";

export function errorHandling(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof appError) {
    return response.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof ZodError) {
    const formattedErrors = error.errors.map((err) => ({
      message: err.message,
    }));
    return response.status(400).json({ errors: formattedErrors });
  }
  return response.status(500).json({ message: error.message });
}
