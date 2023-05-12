const db = require('../routes/db-config')
const bcrypt = require('bcryptjs')

const signup = async (req, res) => {
    if (req.body.src === 'signup') {
        const { fullname, username, password: Npassword, cf_password: Cpassword } = req.body
        if (!fullname || !username || !Npassword || !Cpassword) return res.json({ status: 'error', error: 'Vui lòng nhập đầy đủ thông tin!' })
        else if (Npassword !== Cpassword) return res.json({ status: 'error', error: 'Mật khẩu không trùng khớp!' })
        else {
            db.query('SELECT username FROM users WHERE username = ?', [username], async (err, result) => {
                if (err) throw err
                if (result[0]) return res.json({ status: 'error', error: 'Tài khoản đã tồn tại!' })
                else {
                    const password = await bcrypt.hash(Npassword, 8)
                    db.query('INSERT INTO users SET ?', { username: username, password: password, fullname: fullname }, (error, results) => {
                        if (error) throw error
                        return res.json({ status: 'success', success: 'Đăng ký thành công!' })
                    })
                }
            })
        }
    }
}

module.exports = signup