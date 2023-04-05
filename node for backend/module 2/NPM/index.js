//const { application } = require('express');
const fs = require ('fs');
const http = require ('http');

// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res .end();
// }).listen(8080);

const {passwordGenerator} = require(".\\utils\\passwordEncryption")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  const password = passwordGenerator(200)
  console.log(password)
  res.write(password)
  res.end();
}).listen(8080);


/**
         regular dependencies

         dev dependencies --- are developer/ development dependencies
         (only for the developer and not the application)
         ----they are not installed in production

 */