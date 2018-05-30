const { Client } = require('pg')

const client = new Client()

const getAllUsers = async () => {
    const pool = new Pool()

    // await client.connect()

    // const res = await client.query('SELECT name, surname, email from users order by created desc')
    // var users = res.rows;
    // await client.end()
    // return users;

    await client.connect()

    const res = await pool.query('SELECT name, surname, email from users order by created desc')
    var users = res.rows;
    await pool.end()
    return users;
}

module.exports = getAllUsers;