const bodyParser = require('body-parser');
const express = require('express');

const database = {}
const app = express();
const port = 8080;

app.use(bodyParser)

app.get('/login',(req, res)=>{ 
    return res.send('HELLO WORLD!')
})

// controller is responsible for returning responses for requests
app.post('/new_post',(req, res) => {
    console.log(req.body)
const newPostDate = req.body
database['new_post'] = newPostDate
res.send('New Tweet Saved')
})

app.get('/home',(req, res)=>{ 
    return res.send('HELLO HOME PAGE!')
})

// app.get('/',function(req, res) {
//     const ipAddress = req.socket.remoteAddress;
//     res.send (ipAddress);
//     //console.log
// });
  

app.listen(port,()=> console.log(`server listening on port: ${port}`))



//url params and query params