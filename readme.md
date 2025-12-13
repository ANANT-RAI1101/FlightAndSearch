# FlightAndSearch 


## Overview
FlightAndSearch is a backend service for managing cities, airports, airplanes,
and flights. It provides REST APIs to create, update, and fetch flight-related
data using Node.js, Express, Sequelize, and MySQL.


## Project setup

- clone the project on your local
- execute ```npm install ``` on the same on the same path as of your root directory of the downloaded project
- create ``` .env ``` file in the root directory and add
``` PORT 3000 ```
- setup mysql in your local 
- go to the src folder from your terminal run ```npx sequelize init ``` 
- after that inside the ``src/config`` folder create a new file ``config.json`` and then add the following piece of json
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- after setting up this go to the src folder from your terminal and execute ``npx sequelize db:create``

## DB Design
  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

  - A flight has one airplane but one airplane can have multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

  ### City Table
  - this stores the data of the cities
  - to create city model -> `` npx sequelize model:generate --name City --attributes name:String ``
  - do some changes in `migration` and in model `city.js` like `allowNull:false`
  - then ``npx sequelize db:migrate`` this creates table cities in the db
  - #### similarly we perform for other tables

### Airport Table
- from above method create table
- associate it with city model as ` one city has many airports ` so ` 1 to many relation`
- for association in city.js
``` 
static associate(models) {
      this.hasMany(models.Airport, {
      foreignKey: "cityId"
      });
    } 
```
- for association in airport.js
``` 
static associate(models) {
      this.belongsTo(models.City, {
      foreignKey: "cityId",
      onDelete:"CASCADE"
});
    }
```
- create seed file to put data in table from terminal itself
- to initialize seed file
``` 
npx sequelize seed:generate --name demo-airports
```
- now add data in seed file

- to generate the data
``` 
 npx sequelize db:seed:all
```
- now sync with db to keeps DB schema updated with your models

```
const {PORT,SYNC_DB}=require('./config/serverConfig');
if(SYNC_DB){
  db.sequelize.sync({alter:true})
}
```
- similarly for other tables we will perform the steps

`
- ### API Endpoints (/api/v1)
- #### City

- POST `/api/v1/city` → Create city

- POST `/api/v1/cities` → Create multiple cities

- GET `/api/v1/cities` → Get all cities

- GET `/api/v1/city/:id` → Get city by ID

- PATCH `/api/v1/city/:id` → Update city

- DELETE `/api/v1/city/:id` → Delete city

- GET `/api/v1/cityairports/:id` → Get all airports of a city

- #### Airport

- POST `/api/v1/airport` → Create airport

- GET `/api/v1/city/:cityId/airport/:airportId` → Get airport

- PATCH `/api/v1/city/:cityId/airport/:airportId` → Update airport

- DELETE `/api/v1/city/:cityId/airport/:airportId` → Delete airport

- #### Flight

- POST `/api/v1/flight` → Create flight

- GET `/api/v1/flights` → Get all flights

- GET `/api/v1/flights/:id` → Get flight by ID

`