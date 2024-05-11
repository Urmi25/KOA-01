
const Router = require('koa-router');
const router = new Router();
const { 
    getStudentById,
    createUser,
    updateUser,
    deleteUser
} = require('./controller/users');

router.get('/student/:id', getStudentById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.del('/users/:id', deleteUser);

module.exports = router;