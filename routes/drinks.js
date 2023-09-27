const { Router } = require('express');
const { getRandomDrinks } = require('../controllers/drinks');

const routes = Router();

routes.get('/random', getRandomDrinks);

module.exports = routes;