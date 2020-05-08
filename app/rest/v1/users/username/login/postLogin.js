const { Router } = require('express')

module.exports = Router().post('/rest/v1/users/:username/login', async (req, res) => {
  const { username } = req.params
  const { password } = req.body
  const { User } = req.db

  await User.create({ username, password })

  res.end(`${result}`)
})