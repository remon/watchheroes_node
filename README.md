## Watch Heroes (NodeJs Version)

A simple **ExpressJs** and **React** for Watch Heroes List .

a working demo on **Heroku** on this **[Link](https://watchheroesnode.herokuapp.com/)**

React Components and Js files you will find in folder

> src

Main JS file in

> src/index.js

ExpressJs server in root directory

> server.js

The data for this application fetched from **[this link](https://overwatch-api.tekrop.fr/)** (29 heroes )

the project contains a seed file `db_seed.js` inside seed folder(it will scrap all the data from watchheroes api and then populate the database with it )

> seed/db_seeds.js

To run it in your development enviroment

1. Clone this repo

2. run `yarn` to install all required libraries and files .

3. Create a free account on **[mlab.com](https://mlab.com)**

4. Set your mongoDB enviroment variable as `MONGO_URL` for development create `.env` file in your root directory and put your variable `MONGO_URL` inside it

```
MONGO_URL="mongodb://<username>:<password>@<mlabDbUrl>"
```

5. run `yarn run seed` to populate the database on mlab .

6. run `yarn build && yarn start` then go to `localhost:8080` , you will find your app there

N.B you can run `yarn runbuild` instead of `yarn build && yarn start`

7. you can add env. variable to heroku by the command `heroku config:set MONGO_URL= your db url`
