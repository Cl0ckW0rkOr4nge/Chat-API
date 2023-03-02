const conversationsServices = require('./conversations.services')

const router = require('express').Router()

router.get('/', conversationsServices.getAllConversations)
router.get('/:id', conversationsServices.getConversationById)
router.post('/', conversationsServices.postConversation)
router.patch('/:id', conversationsServices.patchConversation)
router.delete('/:id', conversationsServices.deleteConversation)

module.exports = router 