const conversationsControllers = require('./conversations.controllers')
const handleResponses = require('../utils/handleResponses')

const getAllConversations = (req, res) => {
    conversationsControllers.findAllConversations()
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 200,
                message: 'All conversations collected successfully',
            })
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while getting all conversations',
                fields: {
                    "URL": "http://localhost:9000/api/v1/conversations"
                }

            })
        })
}

const getConversationById = (req, res) => {
    const id = req.params.id
    conversationsControllers.findConversationById(id)
        .then(data => {
            if (data) {
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: 'Conversation with id ' + data.id
                })
            } else {
                handleResponses.error({
                    res,
                    status: 404,
                    message: 'Conversation not found'
                })
            }
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while getting a conversation'
            })
        })
}

const postConversation = (req, res) => {
    const conversationObj = req.body
    conversationsControllers.createNewConversation(conversationObj)
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 201,
                message: 'Conversation created successfully'
            })
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while creating a conversation',
                fields: {
                    "id": "uuid.v4()",
                    "profileImg": "string",
                    "name": "string",
                    //"createdBy": "string",
                    "isGroup": "boolean"
                }
            })
        })
}

const patchConversation = (req, res) => {
    const id = req.params.id
    const conversationObj = req.body
    if (conversationObj.id || conversationObj.profileImg || conversationObj.name || conversationObj.isGroup) {
        conversationsControllers.updateConversation(id, conversationObj)
            .then((data) => {
                if (data) {
                    handleResponses.success({
                        res,
                        data,
                        status: 200,
                        message: `Conversation with id ${data.id} has been updated`
                    })
                } else {
                    handleResponses.error({
                        res,
                        data,
                        status: 404,
                        message: `Conversation with id ${data.id} not found`
                    })
                }
            })
            .catch(error => {
                handleResponses.error({
                    res,
                    data: error,
                    status: 400,
                    message: 'An error accurred while updating the conversation',
                    fields: {
                        "id": "uuid.v4()",
                        "profileImg": "string",
                        "name": "string",
                        //"createdBy": "string",
                        "isGroup": "boolean"
                    }
                })
            })
    }

}

const deleteConversation = (req, res) => {
    const id = req.params.id
    conversationsControllers.deleteConversation(id)
        .then(data => {
            if (data) {
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: `The conversation with id ${data.id} has been deleted`
                })
            } else {
                handleResponses.error({
                    res,
                    data,
                    status: 404,
                    message: `Conversation with id ${data.id} not found`
                })
            }
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while deleting the conversation'
            })
        })
}

module.exports = {
    getAllConversations,
    getConversationById,
    postConversation,
    patchConversation,
    deleteConversation
}