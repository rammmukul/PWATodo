const router = require('express').Router()
const cont = require('./controler')

router.get('/', cont.getTodos)
router.post('/:_', cont.addTodoList)
router.get('/:listId', cont.getTodoList)
router.delete('/:listId', cont.removeTodoList)
router.post('/:listId/:_', cont.addTodo)
router.put('/:listId/:todoId', cont.setTodo)
router.delete('/:listId/:todoId', cont.removeTodo)

module.exports = router
