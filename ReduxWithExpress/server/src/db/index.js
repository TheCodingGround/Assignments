//NOTE: THIS IS NOT USING A POOL and you should for production!!!

const { Pool } = require('pg')

const pool = new Pool({
    user: 'x-superuser',
    host: 'localhost',
    database: 'user_example',
    password: 'y0L7tDIxc5Ev',
})

//YOU CANNOT DO THIS IN A REAL PROJECT!!! IT NEEDS TO BE IN SOMETHING LIKE ENV
const getClient = async () => {
    const client = await pool.connect()
    return client
}

module.exports = {
    getClient
}