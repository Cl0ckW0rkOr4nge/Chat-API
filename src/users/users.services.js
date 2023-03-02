const usersControllers = require('./users.controllers')
const handleResponses = require('../utils/handleResponses')

const getAllUsers = (req, res) => {
    usersControllers.findAllUsers()
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 200,
                message: 'All users collected successfully',
            })
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while getting all users',
                fields: {
                    "URL": "http://localhost:9000/api/v1/users"
                }
            })
        })
}

const getUserById = (req, res) => {
    const id = req.params.id
    usersControllers.findUserById(id)
        .then(data => {
            if (data) {
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: 'User with id ' + data.id
                })
            } else {
                handleResponses.error({
                    res,
                    status: 404,
                    message: `User with id ${data.id} not found`
                })
            }
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while getting a user'
            })
        })
}

const postUser = (req, res) => {
    const userObj = req.body
    usersControllers.createNewUser(userObj)
        .then(data => {
            handleResponses.success({
                res,
                data,
                status: 201,
                message: 'User created successfully'
            })
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while creating a user',
                fields: {
                    "id": "uuid.v4()",
                    "firstName": "string",
                    "lastName": "string",
                    "email": "string",
                    "password": "string",
                    "profileImage": "string",
                    "isActive": "boolean",
                    "phone": "string"
                }
            })
        })
}

const patchUser = (req, res) => {
    const id = req.params.id
    const userObj = req.body
    if (userObj.id || userObj.firstName || userObj.lastName || userObj.email || userObj.password || userObj.profileImage || userObj.isActive || userObj.phone) {
        usersControllers.updateUser(id, userObj)
            .then((data) => {
                if (data) {
                    handleResponses.success({
                        res,
                        data,
                        status: 200,
                        message: `User with id ${data.id} has been updated`
                    })
                } else {
                    handleResponses.error({
                        res,
                        data,
                        status: 404,
                        message: `User with id ${data.id} not found`
                    })
                }
            })
            .catch(error => {
                handleResponses.error({
                    res,
                    data: error,
                    status: 400,
                    message: 'An error accurred while updating the user',
                    fields: {
                        "id": "uuid.v4()",
                        "firstName": "string",
                        "lastName": "string",
                        "email": "string",
                        "password": "string",
                        "profileImage": "string",
                        "isActive": "boolean",
                        "phone": "string"
                    }
                })
            })
    }
}

const deleteUser = (req, res) => {
    const id = req.params.id
    usersControllers.deleteUser(id)
        .then(data => {
            if (data) {
                handleResponses.success({
                    res,
                    data,
                    status: 200,
                    message: `The user with id ${data.id} has been deleted`
                })
            } else {
                handleResponses.error({
                    res,
                    data,
                    status: 404,
                    message: `User with id ${data.id} not found`
                })
            }
        })
        .catch(error => {
            handleResponses.error({
                res,
                data: error,
                status: 400,
                message: 'An error accurred while deleting the user'
            })
        })
}


module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}