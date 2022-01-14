const Sequelize = require('sequelize')

const sequelize = new Sequelize('ready_messages', 'renas', 'renas-tor12@*', {
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