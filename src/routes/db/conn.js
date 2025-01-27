require('dotenv').config({ path: '../.env' });


const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,  
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
  } finally {
    await sequelize.close();
  }
})();
