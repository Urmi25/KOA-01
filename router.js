
const Router = require('koa-router');
const router = new Router();

const { get, post, put, patch, delete: del } = require('./controller/users');

router.get('/users', get);
router.post('/users', post);
router.put('/users/:id', put);
router.patch('/users/:id', patch);
router.del('/users/:id', del);

module.exports = router;