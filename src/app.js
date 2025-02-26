import express from "express";
import exphbs from "express-handlebars";

import configRoutes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("src/public"));

app.set("views", "/views");

const handlebarsInstance = exphbs.create({
  defaultLayout: "main",
  partialsDir: ["src/views/partials"],
});

app.engine("handlebars", handlebarsInstance.engine);
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});
