const express = require("express");
const app = express();
const routes = require("./routes/routes");
const cors = require("cors")
let port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}/`);
});

app.use(cors({
  origin: "http://127.0.0.1:5500/index.html",
}));
