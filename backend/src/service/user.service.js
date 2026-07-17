import { ConflictError, NotFoundError } from "../errors/errorIndex.js";
import repository from "../repository/user.repository.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class UserService{
    async create(data){
        const {senhaconfirm, ...dataUser} = data
        const emailExist = await repository.findByEmail(dataUser.email)
        if (emailExist)
          throw new ConflictError("Email já cadastrado")
        const usernameExist = await repository.findByUsername(dataUser.username)
        if (usernameExist)
          return res.status(400).json({ message: "Username já existente" });
        dataUser.senha = await bcrypt.hash(dataUser.senha, 10);
        const novoUsuario = await repository.create(dataUser)

        const accessToken = jwt.sign(
          { id: novoUsuario.id, role: novoUsuario.role },
          process.env.ACCESS_SECRET,
          { expiresIn: "15min" },
        );

        const refreshToken = jwt.sign(
          { id: novoUsuario.id },
          process.env.REFRESH_SECRET,
          { expiresIn: "30d" }
        );

        await repository.update(
            {id: novoUsuario.id },
            { refreshToken: refreshToken }
        );

        const result = {
          message: `Usuario ${dataUser.username} cadastrado com sucesso`,
          acessToken: accessToken,
          refreshToken: refreshToken,
        };
        return result
    }

    async login(data){
      const {email, senha} = data
      const user = await repository.findByEmail(email)
      if(!user)
        throw new NotFoundError("Credenciais invalidas")
      const senhaValida = await bcrypt.compare(senha, user.senha)
      if(!senhaValida) 
        throw new NotFoundError("Credenciais invalidas");
      const accessToken = jwt.sign(
        {id: user.id, role: user.role},
        process.env.ACCESS_SECRET,
        {expiresIn: "15min"}
      )
      const refreshToken = jwt.sign(
        {id: user.id},
        process.env.REFRESH_SECRET,
        {expiresIn: "30d"}
      )

      await repository.update(
        { id: user.id },
        { refreshToken: refreshToken },
      );

      const result = {
        message: `Usuario logado com sucesso`,
        acessToken: accessToken,
        refreshToken: refreshToken,
      };
      return result;
    }
}

export default new UserService()