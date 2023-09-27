const { Router } = require('express');
const { getRandomDrinks, getFilterDrinks, getIdDrink} = require('../controllers/drinks');

const routes = Router();


routes.get('/randomDrinks', getRandomDrinks);
routes.get('/filter_drinks', getFilterDrinks);
routes.get('/:idDrink', getIdDrink);


module.exports = routes;