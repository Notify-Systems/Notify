import { z } from "zod";

const authSchema = {
  create: z
    .object({
      username: z
        .string({ required_error: "O nome de usuário é obrigatório." })
        .trim()
        .min(3, {
          message: "O nome de usuário deve ter no mínimo 3 caracteres.",
        })
        .max(30, {
          message: "O nome de usuário deve ter no máximo 30 caracteres.",
        }),

      nickname: z
        .string()
        .trim()
        .max(50, { message: "O apelido deve ter no máximo 50 caracteres." })
        .min(3, { message: "O apelido deve ter no minimo 3 caracteres." })
        .optional(),

      biografia: z
        .string()
        .trim()
        .max(500, { message: "A biografia deve ter no máximo 500 caracteres." })
        .optional(),

      email: z
        .string({ required_error: "O e-mail é obrigatório." })
        .trim()
        .email({ message: "Informe um e-mail válido." })
        .max(255, { message: "O e-mail deve ter no máximo 255 caracteres." }),

      password: z
        .string({ required_error: "A senha é obrigatória." })
        .min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
        .max(70, { message: "A senha é muito longa." }),

      passwordConfirm: z.string({ required_error: "Confirme sua senha." }),
    })

    .refine((data) => data.password === data.passwordConfirm, {
      message: "As senhas não coincidem.",
      path: ["senhaconfirm"],
    }),

  login: z.object({
    email: z
      .string({ required_error: "O e-mail é obrigatório." })
      .trim()
      .email({ message: "Informe um e-mail válido." })
      .max(255, { message: "O e-mail deve ter no máximo 255 caracteres." }),

    password: z
      .string({ required_error: "A senha é obrigatória." })
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
      .max(70, { message: "A senha é muito longa." }),
  }),
};

export default authSchema;