const express = require('express');
const app = express();

const files = require('./routes/files');

app.use('/files', files);

app.listen(3000, () => {
    console.log('api running at http://localhost:3000');
});