// Para instalar express, en la consola poner: npm install express

const express = require("express");
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});

app.get("/home", function(req,res){
    res.sendFile(path.resolve(__dirname, './view/home.html'))});
    
 app.get("/login", function(req,res){
    res.sendFile(path.resolve(__dirname, './view/login.html'))});

app.get("/register", function(req,res){
    res.sendFile(path.resolve(__dirname, './view/register.html'))});
        
