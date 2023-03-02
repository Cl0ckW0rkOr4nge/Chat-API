const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const usersModel = require('./users.models')
const conversationsModel = require('./conversations.models')

const Participants = db.define('Participants', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: usersModel,
      key: 'id'
    }
  },
  conversationId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: conversationsModel,
      key: 'id'
    }
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Participants