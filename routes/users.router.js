const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.name.firstName(),
      address: faker.address.city(),
      image: faker.image.cats(),
      music: faker.music.genre()
    });
  }
  res.json(users);
});

module.exports = router;
