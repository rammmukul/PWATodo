const router = require('express').Router()
const cont = require('../controlers/api')
const cors = require('cors')

router.use(cors())
router.get('/', cont.getTodos)
router.post('/', cont.addTodoList)
router.get('/:listId', cont.getTodoList)
router.delete('/:listId', cont.removeTodoList)
router.post('/:listId/', cont.addTodo)
router.put('/:listId/:todoId', cont.setTodo)
router.delete('/:listId/:todoId', cont.removeTodo)

module.exports = router
