const axios = require('axios');
const { request, response} = require('express');

const url = 'https://www.thecocktaildb.com'

const getRandomDrink = (req = request, res = response) => {
    const api = process.env.API_KEY;

    axios.get(`${url}/api/json/v1/${api}/random.php`)
        .then(({ status, data, statusText }) => {
            console.log({ status, data, statusText });
            const {drinks} = data;
            const {idDrink, strDrink, strInstructions, strDrinkThumb} = drinks[0];
            console.log(idDrink + strDrink + strInstructions + strDrinkThumb)
            res.status(200).json({
                status,
                idDrink,
                strDrink,
                strInstructions,
                strDrinkThumb,
                statusText                
            });
        })
        .catch((error)=>{
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });
};

const getIdDrink = (req = request, res = response) => {
    const api = process.env.API_KEY;

    const { idDrink } = req.params;

    axios.get(`${url}/api/json/v1/${api}/lookup.php?i=${idDrink}`)
        .then(({ status, data, statusText }) => {
            console.log({ status, data, statusText });
            const {drinks} = data;
            const {idDrink, strDrink, strInstructions, strDrinkThumb} = drinks[0];
            console.log(idDrink + strDrink + strInstructions + strDrinkThumb)
            res.status(200).json({
                status,
                idDrink,
                strDrink,
                strInstructions,
                strDrinkThumb,
                statusText                
            });
        })
        .catch((error)=>{
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });
}


module.exports = {
    getRandomDrink,
    getIdDrink
};