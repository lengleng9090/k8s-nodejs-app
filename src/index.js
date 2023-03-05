const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get('/health', (req, res) => {
    res.send({
        status: 'This service are healthy.'
    })
})

app.listen(PORT, () => {
    console.log('Application are running on port ' + PORT)
})