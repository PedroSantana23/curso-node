const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('nodesequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  
  sequelize.authenticate()
  console.log("Conectado ao banco!")

} catch (err) {
  console.log("Não foi possível conectar ao banco: ", err)
}

module.exports = sequelize;