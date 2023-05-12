const db = require('../routes/db-config')
const jwt = require('jsonwebtoken')
const loggedIn = (req, res, next) => {
    if (!Object.keys(req.cookies).includes(process.env.COOKIE_NAME)) return next()
    try {
        const decoded = jwt.verify(req.cookies.userLogged, process.env.JWT_SECRET)
        db.query('SELECT * FROM users WHERE username = ?', [decoded.username], (err, result) => {
            req.user = result[0]
            return next()
        })
    } catch (err) {
        if (err) return next()
    }
}

module.exports = loggedIn