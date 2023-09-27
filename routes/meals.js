const { Router } = require('express');
const { getRandomMeals } = require('../controllers/meals');

const routes = Router();

routes.get('/random', getRandomMeals);

module.exports = routes;