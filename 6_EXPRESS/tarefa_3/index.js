const express = require("express")
const app = express()
const port = 5000

const path = require("path")

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static('public'))

const basePath = path.join(__dirname, "templates");

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`)
})

app.get("/about", (req, res) => {
  res.sendFile(`${basePath}/about.html`)
})

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});