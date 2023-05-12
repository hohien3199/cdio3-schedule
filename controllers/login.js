const jwt = require('jsonwebtoken')
const db = require('../routes/db-config')
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
    if (req.method === 'GET') return
    const { username, password } = req.body
    if (!username || !password) return res.json({ status: 'error', error: 'Vui lòng nhập đầy đủ thông tin!' })
    else {
        db.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {
            if (err) throw err
            if (!result.length || !await bcrypt.compare(password, result[0].password))
                return res.json({ status: 'error', error: 'Tài khoản hoặc mật khẩu không đúng!' })
            else {
                const token = jwt.sign({ username: result[0].username }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIN: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie(process.env.COOKIE_NAME, token, cookieOptions)
                return res.json({ status: 'success', success: 'Đăng nhập thành công!' })
            }
        })
    }
}

module.exports = login