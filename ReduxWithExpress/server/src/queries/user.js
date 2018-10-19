const { getClient } = require('../db')

const getUserByEmail = async (email) => {
    const client = await getClient()

    const statement = 'SELECT id, name, surname, email FROM Users where email = $1'
    const parameters = [email]

    const res = await client.query(statement, parameters)
    //THIS IS ONLY OKAY IF we have unique constraint
    const user = res.rows[0]
    //THIS NEEDS TO BE WRAPPED IN TRY CATCH SO YOU CAN END client even with error
    await client.end()
    return user
}

module.exports = {
    getUserByEmail
}