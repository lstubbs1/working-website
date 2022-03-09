const express = require('express')
const router = express.Router()

router.get('/main', (req, res) => {

    const token = req.query.token

    if(token === 'yeehaw') {
        res.render('main', {token: token})    
    }
    else {
        res.render('index')
    }
})

module.exports = router