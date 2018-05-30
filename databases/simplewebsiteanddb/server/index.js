require('dotenv').config()

console.log('the pg user is', process.env.PGUSER);

const express = require('express')
const app = express()
const getUsers = require('./commands/get_users')
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    try{
    var users = await getUsers();
    res.send(users);
    }
    catch(e){
        res.status(500).end();
    }
});

app.post('/users', (req, res) => {
    console.log('user to add', req.body);

    res.status(201).end();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))


//differences
//relational database schema is fixed
