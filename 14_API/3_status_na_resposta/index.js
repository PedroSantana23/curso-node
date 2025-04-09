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

  if(!name) {
    res.status(422).json({ message: "O campo nome é obrigatório!" })
    return
  }

  if(!price) {
    res.status(422).json({ message:"O campo preço é obrigatório!" })
  }

  const product = {
    name, 
    price
  }

  res.status(200).json({ message: "Produto criado!"})
})

app.listen(3000)