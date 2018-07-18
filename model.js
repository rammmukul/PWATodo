const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017'
const mongo = require('mongodb')

async function getDb (user) {
  const client = await require('mongodb').MongoClient.connect(dbUrl)
  return client.db(`todoApp${user}`)
}

module.exports = {
  async getTodos (user) {
    const db = await getDb(user)
    return db.listCollections({name: {$ne: 'system.indexes'}}, {nameOnly: true}).toArray()
  },
  async addTodoList (user, list) {
    const db = await getDb(user)
    return db.createCollection(list)
  },
  async getTodoList (user, listId) {
    const db = await getDb(user)
    const col = await db.collection(listId)
    return col.find({}).toArray()
  },
  async removeTodoList (user, listId) {
    const db = await getDb(user)
    const col = await db.collection(listId)
    return col.drop()
  },
  async addTodo (user, listId, todo) {
    const db = await getDb(user)
    const col = await db.collection(listId)
    return col.insertOne({
      todo: todo,
      done: false
    })
  },
  async setTodo (user, listId, todoId, todo, done = false) {
    const db = await getDb(user)
    const col = await db.collection(listId)
    return col.findOneAndUpdate({_id: mongo.ObjectId(todoId)},
      {$set: {todo, done}}
    )
  },
  async removeTodo (user, listId, todoId) {
    const db = await getDb(user)
    const col = await db.collection(listId)
    return col.findOneAndDelete({_id: todoId})
  }
}
