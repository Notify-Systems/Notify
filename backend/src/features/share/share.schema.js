import { z } from "zod";

const shareSchema = {
  share: z.object({
    userId: z.uuid({ message: "ID inválido." }),
    role: z
      .enum(["editor", "viewer"], {
        message: "o cargo deve ser ou 'editor' ou 'viewer'",
      })
      .default("viewer"),
  }),
};

export default shareSchema;
