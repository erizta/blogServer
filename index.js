const express = require('express')
const db = require('./config/db')
const cors = require('cors')

const app = express()

const PORT = 3001

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send('lloll')
});

app.post('/api.create', (req, res) => {
    const username = req.body.userName
    const title = req.body.title
    const text = req.body.text

    // console.log(username + title + text)

    db.query("INSERT INTO posts (title, post_text, username) VALUES (?,?,?)", [title, text, username], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})