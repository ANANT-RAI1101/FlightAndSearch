# FlightAndSearch 

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