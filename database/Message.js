const db = require('./db')

const Message = db.sequelize.define('messages', {
    id_message: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title_message: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    content_message: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Message