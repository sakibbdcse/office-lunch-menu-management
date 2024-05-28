require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const menuRoutes = require("./routes/menuRoutes");

const app = express();

app.use(express.json());
app.use("/api", menuRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");
    await sequelize.sync();
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
