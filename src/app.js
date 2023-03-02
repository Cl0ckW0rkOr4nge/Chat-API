const express = require("express");
const initModels = require("./models/initModels");
const app = express();
const db = require("./utils/database");
const responseHandlers = require('./utils/handleResponses')
const conversationsRouter = require('./conversations/conversations.router')
const messagesRouter = require('./messages/messages.router')
const participantsRouter = require('./participants/participants.router')
const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
app.use(express.json());

db.authenticate()
    .then(() => {
        console.log('Database authenticated successfully')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database synced successfully')
    })
    .catch(err => {
        console.log(err)
    })

initModels()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": "http://localhost:900/api/v1/users",
            "conversations": "http://localhost:900/api/v1/conversations"
        }
    })
});

app.use('/api/v1/conversations', conversationsRouter)
app.use('/api/v1/messages', messagesRouter)
app.use('/api/v1/participants', participantsRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/auth', authRouter)
app.use('*', (req, res) => {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/'

    })
})
app.listen(9000, () => {
    console.log("Server started at port 9000");
});