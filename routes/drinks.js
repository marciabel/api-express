const { Router } = require('express');
const { getRandomDrink, getIdDrink } = require('../controllers/drinks');

const routes = Router();

routes.get('/randomDrink', getRandomDrink);
routes.get('/:idDrink', getIdDrink);

module.exports = routes;