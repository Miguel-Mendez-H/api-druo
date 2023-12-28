const { User } = require("../models");

const userController = {
  // Get all users

  async getAll(req, res) {
    const users = await User.findAll();
    res.json(users);
  },

  // Get a user by id

  async getById(req, res) {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  },

  // Create a new user

  async create(req, res) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  },
  // Update a user

  async update(req, res) {
    const updatedUser = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedUser);
  },

  // Delete a user

  async delete(req, res) {
    const deletedUser = await User.destroy({
      where: { id: req.params.id },
    });
    res.json(deletedUser);
  },
};

module.exports = userController;
