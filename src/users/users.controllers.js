const Users = require('../models/users.models')
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')
const findAllUsers = async () => {
    const data = await Users.findAll();
    return data
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: { id }
    });
    return data
}

const createNewUser = async (userOBj) => {
    const newUser = {
        id: uuid.v4(),
        firstName: userOBj.name,
        lastName: userOBj.lastName,
        email: userOBj.email,
        password: hashPassword(userOBj.password),
        profileImage: userOBj.profileImage,
        isActive: userOBj.isActive,
        phone: userOBj.phone
    }
    const data = await Users.create(newUser)
    return data
}

const updateUser = async (id, userOBj) => {
    const data = await Users.update(userOBj, {
        where: { id }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: { id }
    })
    return data
}

const findUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: { email }
    })
    return data
}
module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    createNewUser,
    updateUser,
    deleteUser
}