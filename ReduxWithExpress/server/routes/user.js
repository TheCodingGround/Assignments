const validations = require('../src/validations')
const { saveUser } = require('../src/commands')

const userRoutes = (app) => {
  app.post('/user', async (req, res) => {
    const user = req.body
    if (!validations.validUser(user)) {
      res.status(400)
      res.json({
        error: {
          message: "Invalid request object"
        }
      })
    }

    const id = await saveUser(user)

    if (id) {
      res.status(201).send({id})
    } else {
      res.status(500).end()
    }
  })
}

module.exports = userRoutes