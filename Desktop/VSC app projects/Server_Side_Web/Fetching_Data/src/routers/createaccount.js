const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/createaccount', (req, res) => {
    res.render('createaccount')
})

module.exports = router