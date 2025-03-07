const express = require("express");
const app = express();
const cors = require("cors");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const bodyParser = require("body-parser");
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(cors());
app.use(express.static("build"));
app.use("/users", usersRouter);
app.use("/api", loginRouter);

app.get("/", (req, res) => {
  res.send("This is the home");
});

app.listen(PORT, () => {
  console.log(`Starting on Port ${PORT}`);
});
