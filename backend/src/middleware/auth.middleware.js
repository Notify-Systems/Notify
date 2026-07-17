import AppError from "../errors/AppError";
import { UnauthorizedError } from "../errors/errorIndex";

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new UnauthorizedError("Token não encontrado");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;

    next();
  } catch (error) {
    console.log(error);
    if (error.name == "TokenExpiredError")
        throw new AppError("Token expirado, renove com refresh token", 401, error.name );
    throw new UnauthorizedError("Token invalido");
  }
}

export default auth
