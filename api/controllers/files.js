const { validationResult } = require('express-validator/check');

const files = [
    {
        id: 0,
        name: 'somefile.txt'
    },
    {
        id: 1,
        name: 'somefile.png'
    },
    {
        id: 2,
        name: 'somefile.jpg'
    }
];

function list(req, res, next) {
    res.status(200).json(files);
}

function get(req, res, next) {
    res.status(200);
}

function create(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.mapped()});
    }

    res.status(201);
}

function deleteFile(req, res, next) {
    res.status(204);
}

module.exports = {
    list,
    get,
    create,
    delete: deleteFile,
};