const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const participantsModel = require('./participants.models')

const Messages = db.define('Messages', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  participantId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: participantsModel,
      key: 'id'
    }
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'sent'
  }
})

module.exports = Messages