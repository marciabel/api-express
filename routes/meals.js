const { Router } = require('express');
const { getRandomMeals, getMealById, getMealsFilter } = require('../controllers/meals');

const routes = Router();

routes.get('/random', getRandomMeals);

routes.get('/id/:idMeal', getMealById)

routes.get('/filter', getMealsFilter)

module.exports = routes;