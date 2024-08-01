const axios = require('axios');
const { request, response} = require('express');

const url = 'https://www.thecocktaildb.com'


const getRandomDrinks = (req = request, res = response) => {
    const api = process.env.API_KEY;
    const numDrinks = 10;

    const drinksPromises = [];

    for (let i = 0; i < numDrinks; i++) {
        drinksPromises.push(
            axios.get(`${url}/api/json/v1/${api}/random.php`)
                .then(({ status, data, statusText }) => {
                    const { drinks } = data;
                    const { idDrink, 
                            strDrink, 
                            strInstructions, 
                            strDrinkThumb, 
                            strIngredient1,
                            strIngredient2,
                            strIngredient3,
                            strIngredient4,
                            strIngredient5,
                            strMeasure1,
                            strMeasure2,
                            strMeasure3,
                            strMeasure4,
                            strMeasure5,
                         } = drinks[0];
                    
                    const ingredients = [
                        {name: strIngredient1, measure: strMeasure1},
                        {name: strIngredient2, measure: strMeasure2},
                        {name: strIngredient3, measure: strMeasure3},
                        {name: strIngredient4, measure: strMeasure4},
                        {name: strIngredient5, measure: strMeasure5},
                    ]
                    
                    return {
                        idDrink,
                        strDrink,
                        strInstructions,
                        strDrinkThumb,
                        ingredients
                    };
                })
                .catch((error) => {
                    console.log(error);
                    return {
                        status: 400,
                        msg: 'Error inesperado'
                    };
                })
        );
    }

    Promise.all(drinksPromises)
        .then((results) => {
            const response = {
                status: 200,
                results,
                statusText: 'OK'
            }
            res.status(200).json(response);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({
                status: 400,
                msg: 'Error inesperado'
            });
        });
};

const getFilterDrinks = (req = request, res = response) => {
    const api = process.env.API_KEY;

    const { f } = req.query;
    const { c } = req.query;
    let query_params = '';
    console.log(f, c);

    ( f != undefined) ? query_params += f && `search.php?f=${f}`:
    ( c != undefined) ? query_params += c && `filter.php?c=${c}`:

    console.log(query_params)
    axios.get(`${url}/api/json/v1/${api}/${query_params}`)
        .then(({ status, data, statusText }) => {
            console.log({ status, data, statusText });
            const {drinks} = data;
            res.status(200).json({
                status,
                drinks,
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
    getRandomDrinks,
    getFilterDrinks,
    getIdDrink,
};