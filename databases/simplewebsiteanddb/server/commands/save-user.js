var getDbClient = require('./get-db-client')

const saveUser = async (name, surname, email) => {
    const client = await getDbClient();

    var error;

    try {
        const query = `INSERT INTO users(name, surname, email) values($1, $2, $3)`
      const res = await client.query(query,[name,surname,email]);
    } catch (e) {
      error = e;
    } finally {
      client.release();
    }
    if (error) throw error;
}

module.exports = saveUser;