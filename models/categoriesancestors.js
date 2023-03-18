"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoriesAncestors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoriesAncestors.init(
    {
      categoryId: DataTypes.INTEGER,
      ancestorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CategoriesAncestors",
    }
  );
  return CategoriesAncestors;
};
