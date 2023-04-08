// const Event =require('events');

// class MyEvent extends Event{}

// const myEvent = new MyEvent();

// myEvent.on('click',(data)=>{
//     console.log(data, 'FROM THE ONCLICK EVENT')
// })

//  myEvent.on('error',(error)=>{
//      console.log(error.message, 'We  had an error')
//  })

// myEvent.emit('click', {
//     value: 'click'
//  })

// myEvent.emit('error', new Error('whoops!'));



const http = require ('http')


http.createServer(function(req,res){
    res.write('Hello World'); //write a reponse to the client
    res.end(); //end the response
}).listen(8080);//the serverobjectlistens on port 8080

//facebook.com / 124.43.56.87


