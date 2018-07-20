const express = require('express')
const router = express.Router()
const App = require('../controlers/view').App

router.use(express.static('public'))
router.use(App)

module.exports = router
