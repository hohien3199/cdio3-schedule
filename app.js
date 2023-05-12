const express = require('express')
const scrapeData = require('./controllers/scrapeData')
const cookie = require('cookie-parser')
const db = require('./routes/db-config')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(cookie())
app.use(express.json())
app.use(express.static('public'));
app.use('/scrapeData', scrapeData)

db.connect((err) => {
    if (err) throw err;
});

app.use('/', require('./routes/pages'))
app.use('/api', require('./controllers/auth'))

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})