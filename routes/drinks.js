const { Router } = require('express');
const { getRandomDrinks, getIdDrink} = require('../controllers/drinks');

const routes = Router();


routes.get('/randomDrinks', getRandomDrinks);
routes.get('/:idDrink', getIdDrink);

module.exports = routes;