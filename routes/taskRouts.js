const { Router } = require('express')
const { list, store } = require('../controllers/taskController')

const taskRouter = new Router()

taskRouter.get('/', list)

taskRouter.post('/', store)

module.exports = taskRouter;