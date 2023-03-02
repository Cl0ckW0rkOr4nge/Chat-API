const Participants = require('../models/participants.models')
const uuid = require('uuid')
const findAllParticipants = async () => {
    const data = await Participants.findAll();
    return data
}

const findParticipantById = async (id) => {
    const data = await Participants.findOne({
        where: { id }
    });
    return data
}

const createNewParticipant = async (participantOBj) => {
    const newParticipant = {
        id: uuid.v4(),
        userId: participantOBj.userId,
        conversationId: participantOBj.conversationId,
        isAdmin: participantOBj.isAdmin
    }
    const data = await Participants.create(newParticipant)
    return data
}

const updateParticipant = async (id, participantOBj) => {
    const data = await Participants.update(participantOBj, {
        where: { id }
    })
    return data[0]
}

const deleteParticipant = async (id) => {
    const data = await Participants.destroy({
        where: { id }
    })
    return data
}

module.exports = {
    findAllParticipants,
    findParticipantById,
    createNewParticipant,
    updateParticipant,
    deleteParticipant
}