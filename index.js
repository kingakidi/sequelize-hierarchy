const express = require("express");
const app = express();

const { User, Category } = require("./models");

app.get("/login", async function (req, res) {
  const createCategory = await Category.create({
    name: `ICT`,
  });

  const category = await Category.findOne({ where: { name: "ICT" } });

  const root = await Category.findOne({ where: { name: "Root" } });
  // find and create
  const child1 = await root.createChild({ name: "this is another child 1" });
  const child2 = await root.createChild({ name: "Child here is her " });
  const grandchild = await child1.createChild({ name: "Grandchild" });

  // const descendents = await category.getDescendents();

  if (createCategory) {
    res.send({
      working: true,
      category,
      root,
      child1,
      child2,
    });
  }
});
const port = 4000;

app.listen(port, () => {
  console.log("app is listening on port", port);
});
