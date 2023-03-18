const express = require("express");
const app = express();

const { User, Category } = require("./models");

app.get("/login", async function (req, res) {
  const createCategory = await Category.create({
    name: `ICT`,
  });

  const category = await Category.findOne({ where: { name: "ICT" } });
  const parent = await category.getParent();
  const children = await category.getChildren();
  const ancestor = await category.getAncestors();
  const addChild = await category.addChild({ name: "Programming" });

  // const descendents = await category.getDescendents();

  if (createCategory) {
    res.send({
      working: true,
      category,
      parent,
      children,
      ancestor,
      addChild,
      // descendents,
    });
  }
});
const port = 4000;

app.listen(port, () => {
  console.log("app is listening on port", port);
});
