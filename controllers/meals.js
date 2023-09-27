const axios = require('axios');
const { request, response} = require('express');

const url = 'https://www.themealdb.com/api/json/v1'

const getRandomMeal = async () => {
    const api = process.env.API_KEY;      

    return new Promise((resolve, reject) => {
        axios.get(`${url}/${api}/random.php`)
            .then(({ status, data, statusText }) => {
                const { meals } = data;
                const { idMeal, strMeal, strArea, strMealThumb, strYoutube } = meals[0];
                resolve({ idMeal, strMeal, strArea, strMealThumb, strYoutube });
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
    });
}

const createRandomMeals = async () => {
    const mealList = [];

    for (var i=0; i<20; i++) {
        const data = await getRandomMeal();
        mealList.push(data);
        (console.log(mealList)); 
    }

    return mealList;
}

const getRandomMeals = async (req = request, res = response) => {
    try {
        const randomMeals = await createRandomMeals();
        res.status(200).json(randomMeals);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getRandomMeals
};