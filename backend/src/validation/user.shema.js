import { z } from "zod"

const userSchema = {
  updateProfile: z.object(
    {
      nickname: z
        .string()
        .max(50, { message: "O apelido deve ter no máximo 50 caracteres." })
        .min(3, { message: "O apelido deve ter no minimo 3 caracteres." })
        .optional(),
      bio: z
        .string()
        .max(500, { message: "A biografia deve ter no máximo 500 caracteres." })
        .optional()
    },
    { required_error: "A senha é obrigatória." },
  ),

  updateSenha: z.object({
    senhaAtual: z
      .string({ required_error: "A senha é obrigatória." })
      .min(6, { message: "A senha tem no minmo 6 caracteres" })
      .max(70, { message: "A senha não ultrapassa 70 caracteres" }),
    novaSenha: z
      .string({ required_error: "A nova senha é obrigatória." })
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
      .max(70, { message: "A senha é muito longa." }),
  }),

  changeTema:z.enum([light, dark, auto], {message: "O tema precisa ser entre light, dark ou auto"})
};

export default userSchema