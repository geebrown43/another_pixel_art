const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.listen(port, () => {
    console.log('https://localhost:' + port)
})

app.get('/', (req, res) => {
    res.render('index')
})