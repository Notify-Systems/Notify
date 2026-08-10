import service from "./share.service.js";

class ShareController {
  async shareCollection(req, res) {
    const result = await service.shareCollection(req.userId, req.body, req.collection);
    res.status(201).json(result);
  }
}
export default new ShareController();
