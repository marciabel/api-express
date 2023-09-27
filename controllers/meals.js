const axios = require('axios');
const { request, response} = require('express');

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const getRandomMeals = (req = request, res = response) => {
    const api = process.env.API_KEY;

    axios.get(`${url}`)
        .then(({ status, data, statusText }) => {
            // handle success
            console.log({ status, data, statusText });
            const {idMeal, strMeal, strArea, strMealThumb, strYoutube } = data;
            res.status(200).json({
                idMeal,
                strMeal,
                strArea,
                strMealThumb, 
                strYoutube
            });
        })
        .catch((error)=>{
            // handle error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        



}



module.exports = {
    getRandomMeals
};