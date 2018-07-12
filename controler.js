const model = require('./model')

module.exports = {
  async getTodos (req, res) {
    try {
      const list = await model.getTodos('user')
      console.log(list)
      res.json(list)
    } catch (e) {
      console.log(e)
      res.status(500).send()
    }
  },
  async addTodoList (req, res) {
    try {
      await model.addTodoList('user', req.body)
      res.status(200).send()
    } catch (e) {
      res.status(500).send()
    }
  },
  async getTodoList (req, res) {
    try {
      const list = await model.getTodoList('user', req.params.listId)
      res.json(list)
    } catch (e) {
      res.status(500).send()
    }
  },
  async removeTodoList (req, res) {
    try {
      await model.removeTodoList('user', req.params.listId)
      res.status(200).send()
    } catch (e) {
      res.status(500).send()
    }
  },
  async addTodo (req, res) {
    try {
      await model.addTodo('user', req.params.listId, req.body.todo)
      res.status(200).send()
    } catch (e) {
      res.status(500).send()
    }
  },
  async setTodo (req, res) {
    try {
      const list = await model.setTodo('user', req.params.listId, req.params.todoId, req.body.todo, req.body.done)
      res.json(list)
    } catch (e) {
      res.status(500).send()
    }
  },
  async removeTodo (req, res) {
    try {
      await model.removeTodoList('user', req.params.listId, req.params.todoId)
      res.status(200).send()
    } catch (e) {
      res.status(500).send()
    }
  }
}
