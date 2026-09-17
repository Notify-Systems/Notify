import { z } from "zod";
const idSchema = z.object({
  id: z.uuid({
    message: "ID inválido.",
  }),
});
export default idSchema