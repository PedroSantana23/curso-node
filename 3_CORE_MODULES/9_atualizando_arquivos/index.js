const fs = require("fs")

const newFileName = "arquivo_renomeado.txt"

fs.rename("arquivo.txt", newFileName, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Arquivo renomeado")
})