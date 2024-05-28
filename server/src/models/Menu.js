const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Menu = sequelize.define("Menu", {
  date: { type: DataTypes.DATEONLY, allowNull: false },
  option: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Menu;
