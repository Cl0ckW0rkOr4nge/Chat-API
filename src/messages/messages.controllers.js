const Messages = require('../models/messages.models')
const uuid = require('uuid')
const findAllMessages = async () => {
    const data = await Messages.findAll();
    return data
}

const findMessageById = async (id) => {
    const data = await Messages.findOne({
        where: { id }
    });
    return data
}

const createNewMessage = async (messageOBj) => {
    const newMessage = {
        id: uuid.v4(),
        content: messageOBj.content,
        participantId: messageOBj.participantId,
        status: messageOBj.status,
    }
    const data = await Messages.create(newMessage)
    return data
}

const updateMessage = async (id, messageOBj) => {
    const data = await Messages.update(messageOBj, {
        where: { id }
    })
    return data[0]
}

const deleteMessage = async (id) => {
    const data = await Messages.destroy({
        where: { id }
    })
    return data
}

module.exports = {
    findAllMessages,
    findMessageById,
    createNewMessage,
    updateMessage,
    deleteMessage
}
