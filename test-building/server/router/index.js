const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();


router.post('/registration', userController.regisrtation);
router.post('Login', userController.login);
router.post('/Logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router;