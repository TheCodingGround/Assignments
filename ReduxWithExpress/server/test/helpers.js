const { getClient } = require('../src/db')

const clearTable = async (name) => {
        const client = await getClient()
        await client.query(`DELETE FROM ${name}`)
        client.end()
}

module.exports = {
    clearTable
}