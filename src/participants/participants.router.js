const participantsServices = require('./participants.services')

const router = require('express').Router()

router.get('/', participantsServices.getAllParticipants)
router.get('/:id', participantsServices.getParticipantById)
router.post('/', participantsServices.postParticipant)
router.patch('/:id', participantsServices.patchParticipant)
router.delete('/:id', participantsServices.deleteParticipant)

module.exports = router 