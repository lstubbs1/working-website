const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {

    const email = req.query.email
    const password = req.query.password

    if (email === undefined || password === undefined) {
        return res.render('login')
    }
    
    if (email === 'luke@example.com' && password === 'pass') {
        res.status(200).send({
            token: "yeehaw"
        })
    }
    else {
        res.status(401).send()
    }
})

module.exports = router