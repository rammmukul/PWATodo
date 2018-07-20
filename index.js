const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')
const viewRoutes = require('./routes/view')

app.use(bodyParser.json())
app.use('/api/', apiRoutes)
app.use('/view/', viewRoutes)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

app.listen(8000)
