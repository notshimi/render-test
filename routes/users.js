const express = require("express");
const router = express.Router();

const randomID = () => {
  return Math.floor(Math.random() * 100000);
};

let users = [
  {
    id: "0",
    name: "Test",
    age: 99,
  },
];

router.get("/", (req, res) => {
  res.status(200).send(users);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((a) => a.id == id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.status(200).send(users);
});

router.post("/", (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send("Missing body!");
  }
  if (!body.name || !body.age) {
    return res.status(400).send("Missing parameters!");
  }
  body.id = String(randomID());
  users.push(body);
  res.status(201).send(body);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((a) => a.id !== id);
  res.sendStatus(204);
});

module.exports = router;
