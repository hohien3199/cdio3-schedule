const express = require('express')
const router = express.Router()
const loggedIn = require('../controllers/loggedIn')
const logout = require('../controllers/logout')

router.get('/', loggedIn, (req, res) => {
    if (req.user) {
        res.render('index', { status: 'loggedIn', user: req.user })
    } else {
        res.render('index', { status: 'no', user: "nothing" })
    }
})

router.get('/schedule', (req, res) => {
    if (!req.cookies.userLogged) {
        res.redirect('/');
    } else {
        res.sendFile('schedule.html', { root: './public' })
    }
})

// router.get('/', (req, res) => {
//     res.sendFile('index.html')
// })


router.get('/logout', logout)

module.exports = router