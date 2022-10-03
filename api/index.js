const app = require('express')()
const bodyParser = require('body-parser')

const swarmRoutes = require("./swarm.js")

module.exports = { path: '/api', handler: app }

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var timeout = require('connect-timeout');
app.use(timeout(1000*60*30));

app.use("/swarm", swarmRoutes)

app.get('/' ,(req, res) => {
    res.write('Hey!');
    res.end()
})


app.get('/authenticate' ,(req, res) => {
    res.write('Hey!');
    res.end()
})