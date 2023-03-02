const Conversations = require('../models/conversations.models')
const uuid = require('uuid')
const findAllConversations = async () => {
    const data = await Conversations.findAll();
    return data
}

const findConversationById = async (id) => {
    const data = await Conversations.findOne({
        where: { id }
    });
    return data
}

const createNewConversation = async (conversationOBj) => {
    const newConversation = {
        id: uuid.v4(),
        profileImg: conversationOBj.profileImg,
        name: conversationOBj.name,
        //createdBy: conversationOBj.createdBy,
        isGroup: conversationOBj.isGroup
    }
    const data = await Conversations.create(newConversation)
    return data
}

const updateConversation = async (id, conversationOBj) => {
    const data = await Conversations.update(conversationOBj, {
        where: { id }
    })
    return data[0]
}

const deleteConversation = async (id) => {
    const data = await Conversations.destroy({
        where: { id }
    })
    return data
}

module.exports = {
    findAllConversations,
    findConversationById,
    createNewConversation,
    updateConversation,
    deleteConversation
}
