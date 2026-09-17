import { Prisma } from "@prisma/client";
import AppError from "../errors/AppError.js";

function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      ...(err.details ? { details: err.details } : {}),
    });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res.status(409).json({
        status: "error",
        message: "Já existe um registro com esses dados",
      });
    }
    if (err.code === "P2025") {
      return res.status(404).json({
        status: "error",
        message: "Registro não encontrado",
      });
    }
  }
  console.error(err);

  return res.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
  });
}

export default errorHandler
