const express = require("express");
const app = express();
const routes = require("./routes/routes");
let port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}/`);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "file:///C:/Users/g1isa/Desktop/index.html");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});
