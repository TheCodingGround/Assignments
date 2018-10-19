
const express = require('express')
const app = express()
const port = 3002
const userRoutes = require('./routes/user')
const cors = require('cors')

app.use(cors())
app.use(express.json())

userRoutes(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))