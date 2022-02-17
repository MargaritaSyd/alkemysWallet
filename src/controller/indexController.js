
//const { promiseImpl } = require('ejs');
let fs = require ('fs');
let path = require ('path');
//let db = require("../database/models");
//let Op = db.Sequelize.Op;
//const {validationResult} = require ('express-validator');
//const { response } = require('express');
//const mercadopago = require('mercadopago');
//const { array } = require('../middlewares/productMiddleware');
//const fetch = require("node-fetch");
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
        res.render('home')
    },
    operationForm: (req,res) => {
        res.render('form')
    },
    allOperations: (req,res) => {
        res.render('allOperations')
    },
    login: (req,res) => {
        res.render('login')
    },
    loginPost: (req,res) => {
        //res.send("ok")
        let userMail = req.body.mail
        for(let i=0; i<userList.length; i++){
          // console.log(userList[i].mail)
          if(userMail == userList[i].mail){
              res.send("ok")
          } else {
              res.send("not")
          }
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
            //password: req.body.password,
            password: bcryptjs.hashSync(req.body.password , 10)
        };
      

        userList.push(newUser);
        let userListupdated= JSON.stringify(userList, null, " ");
        fs.writeFileSync(usersPath, userListupdated)
        res.redirect('/')  
      
    },
}

module.exports = indexController;