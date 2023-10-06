const express = require('express');
const connection = require('./config/connection')


const PORT = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

connection.once('open', () => {
    app.listen(PORT, () => console.log('Server is Running on PORT 3001'))

})

