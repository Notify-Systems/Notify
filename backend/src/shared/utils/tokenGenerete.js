import repository from "../../features/user/user.repository.js";
import jwt from "jsonwebtoken";

async function tokenGenerete(id, role) {
  const accessToken = jwt.sign(
    { id: id, role: role },
    process.env.ACCESS_SECRET,
    { expiresIn: process.env.ACCESS_EXPIRES },
  );

  const refreshToken = jwt.sign({ id: id }, 
    process.env.REFRESH_SECRET,
    { expiresIn: process.env.REFRESH_EXPIRES });

  await repository.update(id, { refreshToken: refreshToken });

  return({accessToken, refreshToken}) 
}

export default tokenGenerete
