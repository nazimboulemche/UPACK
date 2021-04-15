const express = require('express')
const app = express()
const routes = require("./routes").default
app.use(express.json())
app.use("/api", routes)


app.listen(5500, () => {
    console.log('Server is listening on http://localhost:5500')
}) 

