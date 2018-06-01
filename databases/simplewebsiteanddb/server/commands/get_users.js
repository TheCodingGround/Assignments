var getDbClient = require('./get-db-client')

const getAllUsers = async () => {
    const client = await getDbClient();

    var users;
    var error;

    try {
      const res = await client.query('SELECT name, surname, email from users order by created desc')
      users = res.rows;
    } catch (e) {
      error = e;
    } finally {
      client.release();
    }
    if (error) throw error;
    else return users;

}

module.exports = getAllUsers;