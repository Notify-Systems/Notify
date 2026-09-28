import service from "./friendship.service.js"

class friendshipController {
  async invite(req, res) {
    const result = await service.invite(req.userId, req.params.receiverId);
    res.status(201).json(result);
  }
  async cancel(req, res) {
    const result = await service.cancel(req.userId, req.params.receiverId);
    res.status(200).json(result);
  }
  async accepted(req, res) {
    const result = await service.accepted(req.userId, req.params.senderId);
    res.status(200).json(result);
  }
  async rejected(req, res) {
    const result = await service.rejected(req.userId, req.params.senderId);
    res.status(200).json(result);
  }
  async deleteFriendship(req, res){
    const result = await service.deleteFriendship(req.userId, req.params.user2Id)
    res.status(200).json(result)
  }
}

export default new friendshipController()