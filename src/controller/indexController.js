
let fs = require ('fs');
let path = require ('path');
const bcryptjs = require('bcryptjs');

let usersPath = path.join(__dirname,"../db/user.json");
let userData = fs.readFileSync (usersPath, 'utf-8');
let db = require('../database/models');
let Op = db.sequelize.Op;

let userList ;
if (userData == "") {
    userList = [];
} 
else { 
    userList = JSON.parse(userData);
};


let indexController = {
    
    index: (req,res) => {
        let userToLog
        if(req.session.user){
            req.session.user = userToLog

        }
        
        res.render('home' , {userToLog})
    },

    operationForm: (req,res) => {

        let userToLog
        req.session.user = userToLog

        db.category.findAll()
        
        .then(function(category){
            console.log(userToLog)         
            res.render('operationForm' , {category , userToLog})
        })
        
    },


    operationFormPost: (req,res) => {
        //let userToLog
        if(req.session.user){
            req.session.user = userToLog

        }

        //db.category.findAll()
      //  db.users.findAll()
      //  .then(function(){

      
            db.operations.create({
                concept: req.body.concept,
                amount: req.body.amount,
                type: req.body.incomeOutcome,
                date: req.body.date,
                id_category: req.body.category,
                id_users: 1
            })
     //   })
      
        .then(function(){
            res.render('home' , {userToLog})           
        })
        .catch(function(e){
            res.render('operationForm' , {errorMessage: [{msg:"Se produjo un error, intentalo otra vez!"}]})
        })
   
    },

    login: (req,res) => {
        res.render('login')
    },

    loginPost: (req,res) => {
        let errorMessage= 'Las credenciales son inválidas';

        db.users.findOne( {
            where: {
                mail: req.body.mail
            }
        })
        .then(function(userToLog){
            let passwordOk= bcryptjs.compareSync(req.body.password , userToLog.password)
                   if(passwordOk){ 
                        req.session.user= userToLog;   
                        res.render('home' , {userToLog})

                   } else { 
                        res.render('login' , {errorMessage})
                   }
                })
        .catch(function(e){
            return res.render('login' , {errorMessage})
        })

    },


    register: (req,res) => {
        res.render('register')
    },

    registerPost: (req,res) => {
        db.users.findOne({
            where: {
                mail: req.body.mail
            }
        })
        .then(function(newUser){
            if(newUser){
                return res.render('register' , {errorMessage: [{msg:"Este mail es invalido"}]})
            } else {
                db.users.create({
                    name: req.body.name,
                    mail: req.body.mail,
                    password: bcryptjs.hashSync(req.body.password , 10),
                })
                
                res.render('login')
            
            }

        })
        .catch(function(e){
            res.render('register')
        })

    },
        
    incomes: (req,res) => {
       

        res.render('incomes')

    },

    outcomes: (req,res) => {
       

        res.render('outcomes')

    },
    
}

module.exports = indexController;