const checkUserCredentials = require('./auth.controller')
const response = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')


const postLogin = (req, res) => {
    const { email, password } = req.body
    checkUserCredentials(email, password)
        .then(data => {
            if (data) {
                const payloadObj = {
                    id: data.id,
                    email: data.email,
                    firstName: data.firstName
                }
                const privateKey = process.env.TOKEN_KEY
                const token = jwt.sign(payloadObj, privateKey, { expiresIn: 30 })
                response.success({
                    res,
                    status: 200,
                    message: 'Correct credentials',
                    data: token
                })
            } else {
                response.error({
                    res,
                    status: 401,
                    message: 'Invalid credentials'
                })
            }
        })
        .catch(err => {
            response.error({
                res,
                status: 400,
                data: err,
                message: 'An error has ocurred'
            })
        }
        )
}

module.exports = postLogin