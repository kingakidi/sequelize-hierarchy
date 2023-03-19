const express = require("express");
const app = express();

const { Category } = require("./models");

app.get("/test", async function (req, res) {
  const createCategory = await Category.create({
    name: `ICT`,
  });

  const parentCategory = await Category.findOne({ where: { name: "ICT" } });
  const childCategory = await parentCategory.createChild({
    name: "Child",
  });

  const children = await parentCategory.getChildren();
  const parent = await childCategory.getParent();
  const descendants = await parentCategory.getDescendents();
  const ancestors = await childCategory.getAncestors();

  if (createCategory) {
    res.send({
      working: true,
      parent,
      children,
      descendants,
      ancestors,
    });
  }
});
const port = 4000;

app.listen(port, () => {
  console.log("app is listening on port", port);
});
