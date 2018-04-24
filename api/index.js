const express = require('express');
const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

const files = require('./routes/files');

app.use('/files', files);

app.listen(port, host, () => {
    console.log(`api running at http://${host}:${port}`);
});