const express = require('express')
const app = express()
const port = process.env.PORT || 3300
const path = require('path');
const cors = require('cors');
const router = require('./router')

app.use(cors());

app.use('/', router);
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
