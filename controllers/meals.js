const axios = require('axios');
const { request, response} = require('express');

const url = 'https://www.themealdb.com/api/json/v1'

const getRandomMeal = async () => {
    const api = process.env.API_KEY;      

    return new Promise((resolve, reject) => {
        axios.get(`${url}/${api}/random.php`)
            .then(({ status, data, statusText }) => {
                const { meals } = data;
                const { idMeal, strMeal, strArea, strMealThumb, strYoutube, strDescription } = meals[0];
                resolve({ idMeal, strMeal, strArea, strMealThumb, strYoutube, strDescription });
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
    });
}

const createRandomMeals = async () => {
    const mealList = [];

    for (var i=0; i< 10; i++) {
        const data = await getRandomMeal();
        mealList.push(data);
        (console.log(mealList)); 
    }

    return mealList;
}

const getRandomMeals = async (req = request, res = response) => {
    try {
        const randomMeals = await createRandomMeals();
        const response = {"status": res.status, "data": randomMeals, "statusText": res.statusText};
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const getMealById = (req = request, res = response) => {
    const api = process.env.API_KEY;

    const { idMeal} = req.params;

    axios.get(`${url}/${api}/lookup.php?i=${idMeal}`)
        .then(({ status, data, statusText }) => {
            //Success
            res.status(200).json({
                status,
                data,                
                statusText,                
            });
        })
        .catch((error)=>{
            // Error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });  
}

const getMealsFilter = (req = request, res = response) => {
    const api = process.env.API_KEY;
    const {f, c} = req.query;

    let queryParams = '';
    console.log(f, c);

    (f != undefined) ? queryParams += f && `search.php?f=${f}` :
    (c != undefined) ? queryParams += c && `filter.php?c=${c}` :

    //queryParams += c && `c=${c}`;
    console.log(queryParams)

    axios.get(`${url}/${api}/${queryParams}`)
    .then(({ status, data, statusText }) => {
        // handle success
        console.log({ status, data, statusText });
        console.log(data)
        const {meals} = data;
        console.log(meals)
        //const {results, page } = data;
        res.status(200).json({
            status,
            meals,
            statusText,                
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
    getRandomMeals,
    getMealById,
    getMealsFilter
};