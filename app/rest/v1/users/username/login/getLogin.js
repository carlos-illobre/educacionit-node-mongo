const { Router } = require('express')

module.exports = Router().get('/rest/v1/users', async (req, res) => {

  const { User } = req.db

  const users = await User.find()

  res.end(`${users}`)
})