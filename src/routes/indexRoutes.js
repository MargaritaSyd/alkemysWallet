const express = require('express');
const path = require ('path');
const router = express.Router();
const indexController = require('../controller/indexController');
const notLogged = require('../middlewares/notLogged')

router.get('/' , indexController.index);

router.get('/new_operation' , indexController.operationForm);

router.post('/new_operation' , indexController.operationFormPost);

router.get('/edit_operation/:id' , indexController.editOperationForm);

router.post('/edit_operation/:id' , indexController.editOperationFormPost);

router.get('/delete_operation/:id' , indexController.deleteOperationForm);

router.post('/delete_operation/:id' , indexController.deleteOperationFormPost);

router.get('/login' , indexController.login);

router.post('/login' , indexController.loginPost)

router.get('/register', indexController.register);

router.post('/register' , indexController.registerPost);

router.get('/incomes' , indexController.incomes);

router.get('/outcomes' , indexController.outcomes);

//router.get('/outcomes_incomes' , indexController.outIncomes);
router.get('/api_operations' , indexController.api_users_operations)

module.exports = router;