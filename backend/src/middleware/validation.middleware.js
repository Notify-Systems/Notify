class Validation {
  body(schema) {
    return (req, res, next) => {
      const { success, error } = schema.safeParse(req.body);
      if (!success) {
        return res.status(400).json({
          errors: error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        });
      }

      next();
    };
  }
}

export const validation = new Validation