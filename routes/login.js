const express = require("express");
const router = express.Router();

const randomID = () => {
  return Math.floor(Math.random() * 100000);
};

let accounts = [
  {
    id: 0,
    username: "admin",
    password: "admin",
  },
];

router.get("/", (req, res) => {
  res.status(200).send(accounts);
});

router.post("/login", (req, res) => {
  const credentials = req.body;
  const findAccount = accounts.find((a) => a.username == credentials.username);
  if (!findAccount) {
    return res.status(401).send("Username not found");
  }
  if (findAccount.password != credentials.password) {
    return res.status(401).send("Password is wrong");
  }
  res.status(200).send(findAccount);
});

router.post("/create", (req, res) => {
  const body = req.body;
  body.id = randomID();
  accounts = accounts.concat(body);
  return res.status(200).send(body);
});

module.exports = router;
