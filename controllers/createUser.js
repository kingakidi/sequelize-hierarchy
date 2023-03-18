const { User } = require("../models");

class UserController {
  async createUser(data) {
    return await User.create(data);
  }
}

module.exports = new UserController();
