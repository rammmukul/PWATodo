const express = require('express')
const router = express.Router()
const viewControler = require('../controlers/view')

router.use(viewControler)

module.exports = router
