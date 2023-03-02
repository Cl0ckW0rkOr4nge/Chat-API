const messagesServices = require('./messages.services')

const router = require('express').Router()

router.get('/', messagesServices.getAllMessages)
router.get('/:id', messagesServices.getMessageById)
router.post('/', messagesServices.postMessage)
router.patch('/:id', messagesServices.patchMessage)
router.delete('/:id', messagesServices.deleteMessage)

module.exports = router 