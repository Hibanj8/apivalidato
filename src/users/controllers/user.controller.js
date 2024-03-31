const { UserService } = require("../services/user.service.js");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  Add(user) {
    return this.userService.Add(user);
  }

  update(id, item) {
    return this.userService.update(id, item);
  }

  getOne(id) {
    return this.userService.getOne(id);
  }

  delete(id) {
    return this.userService.delete(id);
  }

  getAll() {
    return this.userService.getAll({});
  }
}

module.exports = UserController;
