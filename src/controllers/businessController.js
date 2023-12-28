
const { Business } = require('../models');


const businessController = {
    // Get all businesses
    
    async getAll(req, res) {
        const businesses = await Business.findAll();
        res.json(businesses);
    },
    
    // Get a business by id
    
    async getById(req, res) {
        const business = await Business.findByPk(req.params.id);
        res.json(business);
    },
    
    // Create a new business
    
    async create(req, res) {
        const newBusiness = await Business.create(req.body);
        res.json(newBusiness);
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