const bcrypt = require("bcrypt");
const User = require("../model/user.js");

class UserService {
  constructor() {
    this.saltRounds = 10;
  }

  async getSchema(item) {
    const { email, name, password } = item;
    const salt = await bcrypt.genSalt(this.saltRounds);
    const cryptedPassword = await bcrypt.hash(password, salt);
    return new User({ email, name, password: cryptedPassword, salt });
  }

  async Add(item) {
    this.collection = await this.getSchema(item);
    const user = await this.collection.save(item);
    if (user) return user["_doc"];
  }

  async update(id, item) {
    if (item.password) {
      const user = await this.getOne(id);
      if (user) {
        item.password = await bcrypt.hash(item.password, user.salt);
        item._id = id;
        this.Add(item);
      } else {
        return null;
      }
    }
    const result = await User.findByIdAndUpdate({ _id: id }, item);
    if (result) return this.getOne(id);
    return null;
  }

  getOne(id) {
    return User.findOne({ _id: id });
  }

  delete(id) {
    return User.findByIdAndDelete({ _id: id });
  }

  getAll() {
    return User.find({});
  }
}

module.exports = UserService;
