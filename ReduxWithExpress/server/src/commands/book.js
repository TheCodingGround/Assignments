const { getClient } = require('../db')

const addBookForUser = async (userId, name) => {
    const client = await getClient()

    const statement = 'INSERT INTO books(user_id, book_name) values($1, $2) RETURNING id;'
    const parameters = [userId, name]

    const res = await client.query(statement, parameters)

    const id = res.rows[0].id

    await client.end()
    return id
}

module.exports = {
    addBookForUser 
}