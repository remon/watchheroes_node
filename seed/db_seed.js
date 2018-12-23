const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();
const FETCH_URL = "https://overwatch-api.tekrop.fr";
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true }
);

const Hero = mongoose.model("Hero", {
  id: Number,
  name: String,
  image: String,
  role: String,
  details: Object
});
const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const fillDb = async data => {
  let heroes_list = [];
  data.map(item => {
    item.details = {};
    return heroes_list.push(item);
  });

  await asyncForEach(heroes_list, async (item, index) => {
    await axios
      .get(FETCH_URL + "/hero/" + item.key)
      .then(async res => {
        item.details = res.data;
        const hero = new Hero({
          id: index + 1,
          name: item.name,
          role: item.role,
          image: item.portrait,
          details: item.details
        });
        hero.save(function(err, hero) {
          if (heroes_list.indexOf(item) === heroes_list.length - 1) {
            mongoose.connection.close(function() {
              console.log("Mongoose disconnected ..seeding finished ");
              process.exit(0);
            });
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

const seedData = () => {
  console.log("fetching all heroes data ..");
  axios.get(FETCH_URL + "/heroes").then(response => {
    fillDb(response.data);
  });
};

seedData();
