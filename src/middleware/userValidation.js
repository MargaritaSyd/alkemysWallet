const path = require ('path');
const {body} = require ('express-validator');
const validations = [
    body('name').notEmpty().withMessage('Ingresá tu nombre'),
    body('mail').isEmail().withMessage('Ingresá tu mail'),
    body('password').isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
   
]

module.exports = validations