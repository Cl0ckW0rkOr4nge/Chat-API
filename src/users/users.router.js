const usersServices = require('./users.services')

const router = require('express').Router()

router.get('/', usersServices.getAllUsers)
router.get('/:id', usersServices.getUserById)
router.post('/', usersServices.postUser)
router.patch('/:id', usersServices.patchUser)
router.delete('/:id', usersServices.deleteUser)

module.exports = router 