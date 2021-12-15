var faker = require("faker");
const express = require("express");

const app = express();

// Constants
const PORT = 8089;

const generateTeweets = (count) => {
  let tweets = [];
  for (let i = 0; i < count; i++) tweets.push(generateTeweet());
  return tweets;
};

const generateTeweet = () => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  creation_date: faker.date.soon(),
  email: faker.internet.email(),
  card: faker.helpers.createCard().posts[0],
});

app.get("/tweets", (req, res) => {
  res.send(generateTeweets(1));
});

app.listen(PORT, () => {
  console.log("Serveur à l'écoute");
});
