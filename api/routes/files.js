const express = require('express');
const router = express.Router();
const { check } = require('express-validator/check');

const files = require('../controllers/files');


router.get('/', files.list);

router.post('/',[
    check('name', 'name is required')
        .exists()
], files.create);

router.get('/:name', files.get);

router.delete('/:name', files.delete);

module.exports = router;