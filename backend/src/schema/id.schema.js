import { z } from "zod";
const idSchema = z.uuid({
  message: "ID inválido."
});

export default idSchema