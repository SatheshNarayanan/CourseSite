const { Sequelize, DataTypes } = require("sequelize");
const dbConn = require("../db");

//user table structure with all fields
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
    NAME: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    EMAIL: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    PHONENO: {
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

//When connecting to new database you can uncomment this to create table,
//NEVER UNCOMMENT THIS LINE IN PRODUCTION CAUSE THIS WILL DROP AND RECREATE THE TABLE
// UserMaster.sync({ force: true });

module.exports = UserMaster;
