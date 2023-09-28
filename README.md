# API Meals & Drinks

Esta API fue desarrollada como proyecto evaluativo para la materia Laboratorio de Computación IV, de la TUP. UTN FRBB. 
27/septiembre/2023


## Tabla de Contenidos

-  [Consideraciones](#consideraciones)
-  [Herramientas](#herramientas)
-  [Documentación](#consideraciones)
-  [Autoras](#autoras)
-  [Reconocimientos](#reconocimientos)


### Consideraciones

Si se quiere ejecutar en entorno local, se debe agregar en el archivo .env la constante API_KEY y setear un valor válido extraido de las siguientes plataformas: [https://www.thecocktaildb.com/](https://www.thecocktaildb.com/api.php)  
[https://www.themealdb.com/](https://www.themealdb.com/api.php)  
API_KEY=##########

Nota: la API alojada en este repositorio hace uso de las API_KEY gratuitas brindadas por dichas plataformas.

*Se provee de un archivo 'sample.env', con un puerto por defecto en 5000. En lugar de crear un nuevo archivo, puede optar por renombrar éste de 'sample.env' a '.env', y completar el campo indicado de la API_KEY.*


### Herramientas 

Se utilizó NodeJS con las siguientes dependecias para su desarrollo:
- express
- axios
- cors
- dotenv

Se encuentra deployada en Render: [URL API Deployada en servidor](https://meal-and-drinks.onrender.com/)

### Documentación 

La API tiene un modulo público donde estan documentados sus endpoints, que se puede accesar a través del siguiente enlace: [Documentacion](https://meal-and-drinks.onrender.com/). También puede verse en el documento index.html que está dentro de la carpeta "public" en este mismo repositorio: [index.html](https://github.com/marciabel/api-express/blob/main/public/index.html). 

### Autoras
- Alvarez, Marcia Belen
- Dominguez Fernandez, Pamela Victoria

### Reconocimientos

Se han realizado consultas a dos APIs para consultar y construir los diferentes endpoints que forman la **API Meals & Drinks.**:

 - [https://www.thecocktaildb.com/](https://www.thecocktaildb.com/api.php)  
 - [https://www.themealdb.com/](https://www.themealdb.com/api.php)  

