
let fs = require ('fs');
let path = require ('path');
const bcryptjs = require('bcryptjs');

let usersPath = path.join(__dirname,"../db/user.json");
let userData = fs.readFileSync (usersPath, 'utf-8');

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
        if(req.session.userLogged){
            req.session.userLogged = userToLog

        }
        
        res.render('home' , {userToLog})
    },

    operationForm: (req,res) => {
        res.render('operationForm')
    },

    operationFormPost: (req,res) => {
        let userToLog
        userToLog = req.session.userLogged

        res.render('home' , {userToLog})
   
    },

    // allOperations: (req,res) => {
    //     res.render('allOperations')
    // },

    login: (req,res) => {
        res.render('login')
    },

    loginPost: (req,res) => {
        let errorMessage= 'Las credenciales son inválidas';
        let userToLog
        let notUser = false
        let userMail = req.body.mail
        for(let i=0; i<userList.length; i++){
           if(userList[i].mail == userMail){
              userToLog = userList[i]
           } else {
               notUser = true
           }
           }

        if(userToLog){
            let passwordOk= bcryptjs.compareSync(req.body.password , userToLog.password)
            if(passwordOk){
                req.session.userLogged = userToLog
            res.render('home' , {userToLog})
            } else {
                res.render('login' , {errorMessage})
            }
        } else {
            res.render('login' , {errorMessage})
        }
    },


    register: (req,res) => {
        res.render('register')
    },

    registerPost: (req,res) => {
     
       for(let i=0; i<userList.length; i++){
            if(req.body.mail == userList[i].mail){
               return res.render('/register' , {mensajeError: [{msg:"Este mail es invalido"}]})
            } }

        let newUser= {
            id: userList.length+1,
            name: req.body.name,
            mail: req.body.mail,
            password: bcryptjs.hashSync(req.body.password , 10)
        };
      

        userList.push(newUser);
        let userListupdated= JSON.stringify(userList, null, " ");
        fs.writeFileSync(usersPath, userListupdated)
        res.redirect('/')  
      
    },

    incomes: (req,res) => {
       

        res.render('incomes')

    },

    outcomes: (req,res) => {
       

        res.render('outcomes' )

    }
}

module.exports = indexController;