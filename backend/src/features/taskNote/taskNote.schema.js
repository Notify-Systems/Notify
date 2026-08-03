import { z } from "zod";

const taskNoteSchema = {
  create: z.object({
    content: z
      .string({ message: "O comentário deve ter algum conteúdo." })
      .trim()
      .min(1, { message: "O comentário deve ter algum conteúdo." })
      .max(10000, { message: "O comentário é longo demais" }),
    taskId: z.uuid({ message: "ID inválido." }),
  }),
  update: z.object({
    content: z
      .string({ message: "Deve se inserir alguma mudança" })
      .trim()
      .min(1, { message: "O comentário deve ter algum conteúdo." })
      .max(10000, { message: "O comentário é longo demais" }),
  }),
};

export default taskNoteSchema;