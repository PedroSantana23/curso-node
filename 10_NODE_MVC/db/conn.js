const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  
  sequelize.authenticate()
  console.log("Conectou ao banco!")

} catch (error) {
  console.log(`Não foi possível conectar ao banco: ${error}`)
}

module.exports = sequelize;