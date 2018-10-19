const { getClient } = require('../db')

const saveUser = async (user) => {
    const { name, surname, email } = user
    const client = await getClient()

    const statement = 'INSERT INTO users(name, surname, email) values($1, $2, $3) RETURNING id;'
    const parameters = [name, surname, email]

    const res = await client.query(statement, parameters)

    const id = res.rows[0].id

    await client.end()
    return id
}

module.exports = {
    saveUser
}