const logout = (req, res) => {
    res.clearCookie(process.env.COOKIE_NAME)
    res.redirect('/')
}

module.exports = logout