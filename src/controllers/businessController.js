const { Business } = require("../models");

const businessController = {
  async getAll(req, res) {
    const businesses = await Business.findAll();
    res.json(businesses);
  },

  async getById(req, res) {
    const business = await Business.findByPk(req.params.id);
    res.json(business);
  },

  async create(req, res) {

    const businessName = await Business.findOne({
        where: { name: req.body.name },
    });

    if (businessName) {
        return res.status(400).json({
            status: 400,
            message: "Error en el campo negocio",
        });
    }

    try {
      const business = await Business.create(req.body);
      res.status(201).json({
        id: business.id,
        data: business,
        status: 201,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },

  // Update a business

  async update(req, res) {
    const updatedBusiness = await Business.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedBusiness);
  },

  // Delete a business

  async delete(req, res) {
    const deletedBusiness = await Business.destroy({
      where: { id: req.params.id },
    });
    res.json(deletedBusiness);
  },
};

module.exports = businessController;
