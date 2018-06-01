require('dotenv').config()

console.log('the pg user is', process.env.PGUSER);

const express = require('express')
const app = express()
const getUsers = require('./commands/get_users')
const saveUser = require('./commands/save-user')
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    try{
    var users = await getUsers();
    res.send(users);
    }
    catch(e){
        console.log('Users get from db error',e);
        res.status(500).end();
    }
});

app.post('/users', async (req, res) => {
    try{
        const {
          name,
          surname,
          email
        } = req.body;

    await saveUser(name, surname, email);

    }catch(e){
        console.log('Users get from db error',e);
        res.status(500).end();
    }

    res.status(201).end();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))


//differences
//relational database schema is fixed
