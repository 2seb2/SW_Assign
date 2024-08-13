var express = require('express');

var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

var dbconnect_module = require('./dbconnect_module');

router.post('/', (req, res, next) => {
    let type = req.query.type;
    if (type == 'list') {
        // 전체 목록 조회
        try {
            req.body.mapper = 'boardsMapper';
            req.body.crud = 'select';
            req.body.mapper_id = 'selectBoardList';
            next();
        } catch (error) {
            console.log('Module > dbconnect error : ' + error);
        }
    }
}, dbconnect_module);

module.exports = router;