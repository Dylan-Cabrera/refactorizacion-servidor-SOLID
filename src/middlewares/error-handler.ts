import { Response, Request, NextFunction } from "express";

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.error(err);
    return res.status(500).json({message: "Error interno del servidor"});
}