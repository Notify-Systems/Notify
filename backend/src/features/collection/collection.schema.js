import { z } from "zod"

const collectionSchema= {
    create:z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "O nome é obrigatório." })
    .max(100, { message: "O nome deve ter no máximo 100 caracteres." }),

  description: z
    .string()
    .trim()
    .max(1000, { message: "A descrição deve ter no máximo 1000 caracteres." })
    .optional(),

  visibility: z
    .enum(["private", "public"], {
      message: "A visibilidade deve ser 'private' ou 'public'.",
    })
    .default("private"),

  themeColor: z
    .hex({ message: "A cor temática deve ser um hexadecimal válido." })
    .length(6, { message: "A cor temática deve conter 6 caracteres." })
    .default("3B82F6"),

})
}

export default collectionSchema