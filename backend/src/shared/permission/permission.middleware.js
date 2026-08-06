import { ForbiddenError, NotFoundError } from "../errors/errorIndex.js";
import permission from "./permission.service.js";

function can(action, resource) {
  return async (req, res, next) => {
    const userId = req.userId;
    const resourceId = req.params.id ?? req.body[`${resource}Id`];
    switch (action) {
      case "view": {
        resource = await permission[`${resource}View`](userId, resourceId);
        if (resource == false)
          throw new NotFoundError("Colleção não encontrada");
        req[resource] = resource;
        return next();
      }
      case "edit": {
        resource = await permission[`${resource}Edit`](userId, resourceId);
        if (resource == false)
          throw new ForbiddenError("Permissão de editar negada");
        req[resource] = resource;
        return next();
      }
      case "owner": {
        resource = await permission[`${resource}Owner`](userId, resourceId);
        if (resource == false) throw new ForbiddenError("Permissão negada");
        req[resource] = resource;
        return next();
      }
    }
  };
}

export default can;