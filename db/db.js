const { Sequelize, DataTypes } = require("sequelize");

//Incase you want to connect to any other database with IP, username and password
// const dbConn = new Sequelize(
//   process.env.DB_DATABSE, provide database name
//   process.env.DB_USER, provide user name
//   process.env.DB_PASSWORD, provide user password
//   {
//     host: process.env.DB_IP, provide database ip
//     port: process.env.DB_PORT, provide database port default port fort psql is 5432
//     dialect: process.env.DB_NAME, provide values such as 'postgres', refer https://sequelize.org/docs/v6/other-topics/dialect-specific-things/
//   }
// );

//Incase you want to connect to any other database with URI
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
