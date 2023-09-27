const { Router } = require('express');
const { getRandomMeals, getMealById } = require('../controllers/meals');

const routes = Router();

routes.get('/random', getRandomMeals);

routes.get('/id/:idMeal', getMealById)

module.exports = routes;