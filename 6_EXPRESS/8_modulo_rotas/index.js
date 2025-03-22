const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const userRoutes = require("./users");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "templates");

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
