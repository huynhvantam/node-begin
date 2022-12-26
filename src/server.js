require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')


const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

configViewEngine(app)
//khai bao route
app.use('/', webRoutes)

//test connetion


connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(results)
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})