const { Sequelize, DataTypes } = require("sequelize");
const dbConn = require("../db");

const UserMaster = dbConn.define(
  "UserMaster",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    NIELITID: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    EMAIL: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    PASSWORD: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    COURSENAME: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ACTIVE: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    tableName: "USERMASTER",
  }
);

// UserMaster.sync({ force: true });

module.exports = UserMaster;
