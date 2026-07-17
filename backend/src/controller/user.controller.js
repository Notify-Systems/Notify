import { prisma } from "../lib/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export class UserController {
  async create(req, res) {
    const { username, nickname, email, senha, biografia } = req.body;
    try {
      const emailExist = await prisma.user.findUnique({ where: { email } });
      if (emailExist)
        return res.status(400).json({ message: "Email já cadastrado" });
      const usernameExist = await prisma.user.findUnique({
        where: { username },
      });
      if (usernameExist)
        return res.status(400).json({ message: "Username já existente" });
      const senhaHash = await bcrypt.hash(senha, 10);
      const novoUsuario = await prisma.user.create({
        data: {
          username,
          nickname,
          email,
          senha: senhaHash,
          biografia,
        },
      });

      const accessToken = jwt.sign(
        {
          id: novoUsuario.id,
          role: novoUsuario.role,
        },
        process.env.ACCESS_SECRET,
        { expiresIn: "15min" },
      );

      const refreshToken = jwt.sign(
        {
          id: novoUsuario.id,
        },
        process.env.REFRESH_SECRET,
        { expiresIn: "30d" },
      );

      await prisma.user.update({
        where: { id: novoUsuario.id },
        data: {
          refreshToken,
        },
      });
      res.status(201).json({
        message: `Usuario ${username} cadastrado com sucesso`,
        acessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro interno" });
    }
  }
}