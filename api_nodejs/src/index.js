const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
//middlewares
app.use(bodyParser.json());
routes(app);

//connect database Mongodb
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connect Successfull! 🍭🍭");
  })
  .catch((err) => {
    console.log(`Connect Failed:${err} `);
  });

app.listen(port, () => {
  console.log(`Server is running in port: https://localhost:${port}`);
});
