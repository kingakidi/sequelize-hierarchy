const express = require("express");
const app = express();

const { User, Category } = require("./models");

app.get("/hi", async function (req, res) {
  const createCategory = await Category.create({
    name: `ICT`,
  });

  if (createCategory) {
    const getUser = await User.findAll();

    res.send({
      working: true,
      data: getUser,
    });
  }
});
const port = 4000;

app.listen(port, () => {
  console.log("app is listening on port", port);
});
