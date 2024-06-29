const express = require('express')
const reportRoutes = require('../../interfaces/api/routes/reportRoutes')

const app = express()
const port = 3000

app.use(express.json())

app.use('/api', reportRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/api`)
})