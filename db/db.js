const { Sequelize, DataTypes } = require("sequelize");

// const dbConn = new Sequelize(
//   process.env.DB_DATABSE,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_IP,
//     port: process.env.DB_PORT,
//     dialect: process.env.DB_NAME,
//   }
// );

const dbConn = new Sequelize(process.env.DBURI);

testConnection = async () => {
  try {
    await dbConn.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

module.exports = dbConn;
