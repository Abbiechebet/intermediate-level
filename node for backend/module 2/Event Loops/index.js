const fs = require('fs');

const crypto = require('crypto');
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2;

// fs.writeFile('.\\docs\\newFile.pdf', "Hello World", () =>{
//     console.log('write file process done');
// });

// setTimeout(() =>{ console.log('Timer 1 finished')}, 0)

// setImmediate(() =>{ console.log('Immediate 1 finished')})

// fs.readFile('.\\docs\\newFile.pdf', ()=>{
//     console.log('I/O finished')
// })

// console.log('server running on hope')




// setTimeout(() =>{ console.log('Timer 1 finished')}, 0)

// setImmediate(() =>{ console.log('Immediate 1 finished')})



fs.readFile('.\\docs\\newFile.pdf', ()=>{
    console.log('I/O finished')

// readfile callbacks
setTimeout(() =>{ console.log('Timer 2 finished')}, 0)

 setTimeout(() =>{ console.log('Timer 3 finished') 
 process.nextTick(() => console.log('process.nextTick()'))
 }, 3000)

setImmediate(() =>{ console.log('Immediate 2 finished')})

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
    console.log(Date.now() - start, 'password encrypted')})

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start, 'password encrypted')})

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
            console.log(Date.now() - start, 'password encrypted')})

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
                console.log(Date.now() - start, 'password encrypted')})
})

console.log('server running on hope')


/**
libuv is written in pure C++  
is responsoble forevent-loop and threadpool
works in FIFO manner 

node js is writtenn in C++ and javascript

there 4 threadpools available by default

 */

