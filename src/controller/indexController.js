
//const { promiseImpl } = require('ejs');
let fs = require ('fs');
let path = require ('path');
//let db = require("../database/models");
//let Op = db.Sequelize.Op;
const {validationResult} = require ('express-validator');
//const bcrypt = require('bcryptjs');
//const { response } = require('express');
//const mercadopago = require('mercadopago');
//const { array } = require('../middlewares/productMiddleware');
//const fetch = require("node-fetch");

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
    register: (req,res) => {
        res.render('register')
    },
    registerPost: (req,res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){

       res.send('joya')

        .then(function(){
            res.render("login")
        })
        } else {
            error = errors.mapped()
            return res.render("register" , {error, old:req.body})
        }


    },
}

module.exports = indexController;