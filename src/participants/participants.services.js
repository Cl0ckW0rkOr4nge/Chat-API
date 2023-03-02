const participantsControllers = require('./participants.controllers')
const handleResponses = require('../utils/handleResponses')

const getAllParticipants = (req, res) => {
    participantsControllers.findAllParticipants()
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 200,
                message: 'All participants collected successfully',
            })
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while getting all participants',
                fields: {
                    "URL": "http://localhost:9000/api/v1/participants"
                },

            })
        })
}

const getParticipantById = (req, res) => {
    const id = req.params.id
    participantsControllers.findParticipantById(id)
        .then(data => {
            if (data) {
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: 'Participant with id ' + data.id
                })
            } else {
                handleResponses.error({
                    res,
                    status: 404,
                    message: `Participant with id ${data.id} not found`
                })
            }
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while getting a participant'
            })
        })
}

const postParticipant = (req, res) => {
    const participantObj = req.body
    participantsControllers.createNewParticipant(participantObj)
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 201,
                message: 'Participant created successfully'
            })
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while creating a participant',
                fields: {
                    "id": "uuid.v4()",
                    "userId": "uuid.v4()",
                    "conversationId": "uuid.v4()",
                    "isAdmin": "boolean"
                }
            })
        })
}

const patchParticipant = (req, res) => {
    const id = req.params.id
    const participantObj = req.body
    if (participantObj.id || participantOBj.userId || participantOBj.conversationId || participantOBj.isAdmin) {
        participantsControllers.updateParticipant(id, participantObj)
            .then((data) => {
                if (data) {
                    handleResponses.success({
                        res,
                        data,
                        status: 200,
                        message: `Participant with id ${data.id} has been updated`
                    })
                } else {
                    handleResponses.error({
                        res,
                        data,
                        status: 404,
                        message: `Participant with id ${data.id} not found`
                    })
                }
            })
            .catch(error => {
                handleResponses.error({
                    res,
                    data: error,
                    status: 400,
                    message: 'An error accurred while updating the participant',
                    fields: {
                        "id": "uuid.v4()",
                        "userId": "uuid.v4()",
                        "conversationId": "uuid.v4()",
                        "isAdmin": "boolean"
                    }
                })
            })
    }
}

const deleteParticipant = (req, res) => {
    const id = req.params.id
    participantsControllers.deleteParticipant(id)
        .then(data => {
            if (data) {
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: `The participant with id ${data.id} has been deleted`
                })
            } else {
                handleResponses.error({
                    res,
                    data,
                    status: 404,
                    message: `Participant with id ${data.id} not found`
                })
            }
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while deleting the participant'
            })
        })
}

module.exports = {
    getAllParticipants,
    getParticipantById,
    postParticipant,
    patchParticipant,
    deleteParticipant
}