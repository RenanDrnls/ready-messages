const Sequelize = require('sequelize')

const sequelize = new Sequelize('ready_messages', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Database has been connected succesfully!');
}).catch((err) => {
    console.log(`Unable to connect to the database: ${err}`);
})

module.exports = {
    Sequelize,
    sequelize
}