const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json())

// rotas - endpoints
app.get("/", (req, res) => {
  res.json({ message: "Primeira rota!" })
})

app.post("/createproduct", (req, res) => {
  
  const name = req.body.name;
  const price = req.body.price;

  const product = {
    name, 
    price,
  };

  res.json(product)

})

app.listen(3000)