import { ConflictError, NotFoundError, UnauthorizedError } from "../../errors/errorIndex.js";
import repository from "../user/user.repository.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class AuthService{
    async create(data){
        const {passwordConfirm, ...dataUser} = data
        const emailExist = await repository.findByEmail(dataUser.email)
        if (emailExist)
          throw new ConflictError("Email já cadastrado")
        const usernameExist = await repository.findByUsername(dataUser.username)
        if (usernameExist)
          return res.status(400).json({ message: "Username já existente" });
        dataUser.password = await bcrypt.hash(dataUser.password, 10);
        const newUser = await repository.create(dataUser)

        const accessToken = jwt.sign(
          { id: newUser.id, role: newUser.role },
          process.env.ACCESS_SECRET,
          { expiresIn: "15min" },
        );

        const refreshToken = jwt.sign(
          { id: newUser.id },
          process.env.REFRESH_SECRET,
          { expiresIn: "30d" }
        );

        await repository.update(
            newUser.id,
            { refreshToken: refreshToken }
        );

        const result = {
          message: `Usuario ${newUser.username} cadastrado com sucesso`,
          acessToken: accessToken,
          refreshToken: refreshToken,
        };
        return result
    }

    async login(data){
      const {email, password} = data
      const user = await repository.findByEmail(email)
      if(!user)
        throw new NotFoundError("Credenciais invalidas")
      const passwordValid = await bcrypt.compare(password, user.password)
      if(!passwordValid) 
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

      await repository.update( user.id, { refreshToken: refreshToken }); 

      const result = {
        message: `Usuario logado com sucesso`,
        acessToken: accessToken,
        refreshToken: refreshToken,
      };
      return result;
    }

    async refresh(auth){
      if(!auth)
        throw new UnauthorizedError("Token não encontrado");
      const token = auth.split(" ")[1];
      try{
        var decoded = jwt.verify(token, process.env.REFRESH_SECRET);
      }catch{
        throw new UnauthorizedError("Token invalido");
      }
      const user = await repository.findById(decoded.id)
      if(!user || token !== user.refreshToken)
        throw new UnauthorizedError("Token invalido");

      const accessToken = jwt.sign(
        { id: user.id, role: user.role },
        process.env.ACCESS_SECRET,
        { expiresIn: "15min" },
      );
      const refreshToken = jwt.sign(
        { id: user.id },
        process.env.REFRESH_SECRET,
        { expiresIn: "30d" },
      );

      await repository.update(user.id, { refreshToken: refreshToken });

      const result = {
        message: `Usuario logado com sucesso`,
        acessToken: accessToken,
        refreshToken: refreshToken,
      };
      return result;
    }
}

export default new AuthService()