import { ForbiddenError, NotFoundError } from "../errors/errorIndex.js";
import permission from "./permission.service.js";

function can(action, resource) {
  return async (req, res, next) => {
    const userId = req.userId;
    const resourceId = req.params.id ?? req.body[`${resource}Id`];
    switch (action) {
      case "view": {
        req[resource] = await permission[`${resource}View`](userId, resourceId);
        if (req[resource] == false)
          throw new NotFoundError("Colleção não encontrada");
        return next();
      }
      case "edit": {
        req[resource] = await permission[`${resource}Edit`](userId, resourceId);
        if (req[resource] == false)
          throw new ForbiddenError("Permissão de editar negada");
        return next();
      }
      case "create":{
        const sectionId = req.body.sectionId
        const collectionId = req.body.collectionId
        const allowed = await permission[`${resource}Create`](userId, sectionId, collectionId);
        if (allowed == false)
          throw new ForbiddenError("Permissão de criar negada");
        return next();
      }
      case "owner": {
        req[resource] = await permission[`${resource}Owner`](userId, resourceId);
        if (req[resource] == false)
          throw new ForbiddenError("Permissão negada");
        return next();
      }
    }
  };
}

export default can;