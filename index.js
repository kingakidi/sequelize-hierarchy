const express = require("express");
const app = express();

const { User, Category } = require("./models");

app.get("/login", async function (req, res) {
  const createCategory = await Category.create({
    name: `ICT`,
  });

  const category = await Category.findAll();

  if (createCategory) {
    res.send({
      working: true,
      data: category,
    });
  }
});
const port = 4000;

app.listen(port, () => {
  console.log("app is listening on port", port);
});
