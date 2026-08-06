import userRepository from "../../features/user/user.repository.js";
import { NotFoundError } from "../errors/errorIndex.js";

async function userExist(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) throw new NotFoundError("Usuario não encontrado");
  req.user = user;
  next();
}
export default userExist