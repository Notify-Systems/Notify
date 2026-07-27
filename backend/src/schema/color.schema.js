const colorSchema = z.hex({ message: "A cor deve ser um hexadecimal válido." })
    .length(6, { message: "A cor deve conter 6 caracteres." })
    .default("3B82F6")

export default colorSchema