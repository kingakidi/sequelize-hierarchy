"use strict";
const { Model } = require("sequelize");

// const sequelizeHierarchy = require("sequelize-hierarchy-next");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Category.belongsTo(Category, {
        as: "parentCategory",
        foreignKey: "parentId",
      });
      Category.hasMany(Category, {
        as: "childrenCategory",
        foreignKey: "parentId",
      });

      Category.belongsToMany(Category, {
        as: "descendents",
        foreignKey: "ancestorId",
        through: models.CategoryAncestor,
      });
      Category.belongsToMany(Category, {
        as: "ancestors",
        foreignKey: "CategoryId",
        through: models.CategoryAncestor,
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      hierarchyLevel: {
        type: DataTypes.INTEGER,
      },
      parentId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  Category.isHierarchy();
  return Category;
};
