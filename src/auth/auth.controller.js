const { findUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

const checkUserCredentials = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        const veryfyPassword = comparePassword(password, user.password)
        if (veryfyPassword) {
            return user
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

module.exports = {
    checkUserCredentials
}