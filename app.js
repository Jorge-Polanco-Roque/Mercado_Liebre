// Para instalar express, en la consola poner: npm install express

const express = require("express");
const app = express('path);
const publicPath = path.resolve(__dirname, './public');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(PORT, function(){console.log(`Servidor corriendo en el puerto ${PORT}`)});

app.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname, './view/home.html')}
                ));
    
 app.get("/login", function(req,res){
    res.sendFile(path.resolve(__dirname, './view/login.html')}
                ));

app.get("/register", function(req,res){
    res.sendFile(path.resolve(__dirname, './view/register.html')}
                ));
        


