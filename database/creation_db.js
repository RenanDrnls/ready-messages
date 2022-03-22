//Run this file with node ./database/creation_db.js to create the tables in your database with ready_messages name

const Sequelize = require('sequelize')

const sequelize = new Sequelize('ready_messages', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

const Message = sequelize.define('messages', {
    id_message: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title_message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content_message: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Message.sync();