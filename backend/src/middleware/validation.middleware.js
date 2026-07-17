import AppError from "../errors/AppError.js";

class Validation {
  body(schema) {
    return (req, res, next) => {
      const result = schema.safeParse(req.body);
      if (!result.success) {
        const formattedErrors = result.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        }));
        const validationError = new AppError( "Erro de validação nos campos", 400, formattedErrors );

        return next(validationError);
      }
      req.body = result.data;
      next();
    };
  }
}

export default new Validation()
