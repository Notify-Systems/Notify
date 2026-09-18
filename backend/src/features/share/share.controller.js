import service from "./share.service.js";

class ShareController {
  share(shareItem) {
    return async (req, res) => {
      const result = await service.share(
        req.userId,
        req.body,
        shareItem,
        req[shareItem],
      );
      res.status(201).json(result);
    };
  }
}
export default new ShareController();
