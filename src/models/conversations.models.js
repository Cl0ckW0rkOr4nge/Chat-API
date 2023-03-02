const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('Conversations', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  profileImage: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // createdBy: {
  //   type: DataTypes.UUID,
  //   allowNull: false
  // },
  isGroup: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Conversations 