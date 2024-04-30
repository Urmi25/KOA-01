const Router = require('koa-router');
const router = new Router();


const {get ,post} = require('./controller/users');


router.get('/users', get);
router.post('/users',post);

module.exports = router;