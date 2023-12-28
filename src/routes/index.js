const express = require('express');
const router = express.Router();

const businessesRoutes = require('./businesses');
const usersRoutes = require('./users');

router.use('/businesses', businessesRoutes);

router.use('/users', usersRoutes);

module.exports = router;
