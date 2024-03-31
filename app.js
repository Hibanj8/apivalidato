const express = require("express");
const userRouter = require("./users/route.js");
const app = express();
const PORT = process.env.PORT || 8000;
const connectionString = process.env.DB_CONNECTION_STRING;

app.use(express.json());

app.use("/users", userRoutes);

const startserver = async () => {
  try {
    await db.mongoose.connect(connectionString, {
      dbName: "",
    });
    console.log("Connection to the database successful");

    app.listen(PORT, () => {
      console.log("http://localhost:" + PORT);
    });
  } catch (error) {
    console.log(error.message);
  }
};
// To start the server:
startserver();
module.exports = app;
