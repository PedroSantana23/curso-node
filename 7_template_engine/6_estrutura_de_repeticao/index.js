const express = require("express")
const exphbs = require("express-handlebars")

const app = express();

app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")

app.get("/dashboard", (req, res) => {

  const items = ["Item A", "Item B", "Item C"]

  res.render("dashboard", { items })
})

app.get("/", (req, res) => {

  const user = {
    name: "Pedro Henrique",
    surname: "Silva",
    age: 22,
  }

  const palavra = "Teste"

  const auth = true

  const approved = true

  res.render("home", { user: user, palavra, auth, approved })
})

app.listen(3000, () => {
  console.log("App funcionando!")
})