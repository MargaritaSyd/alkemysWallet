const express = require ('express');
const app = express();
const path = require ('path');
const indexRoutes = require('./src/routes/indexRoutes');

//const session = require('express-session');

/*
app.use(session({
	secret: "It's a secret",
	resave: false,
	saveUninitialized: false,
}));
*/
app.listen(process.env.PORT || 4000, function(){
    console.log('Servidor corriendo en puerto 4000');
});

app.use(express.static(path.resolve(__dirname , './public')));

app.use(express.urlencoded({ extended: false }))

app.use(express.json())


app.set('view engine' , 'ejs');

app.use('/' , indexRoutes);

app.get("*", (req,res) => {
	res.redirect("/error")
})