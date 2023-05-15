const fs = require("fs");

const crypto = require("crypto");
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2;

// fs.writeFile('.\\docs\\newFile.pdf', "Hello Amazing Stutern Team", () =>{
//     console.log('printed 4th: write file process done');
// });

// setTimeout(() =>{ console.log('printed 2nd: Timer 1 finished')}, 0)

// setImmediate(() =>{ console.log('printed 3rd: Immediate 1 finished')})

// fs.readFile('.\\docs\\newFile.pdf', ()=>{
//     console.log('printed 5th: I/O finished')
// })

// console.log('printed 1st: server running on hope')

// setTimeout(() =>{ console.log('Timer 1 finished')}, 0)
// setImmediate(() =>{ console.log('Immediate 1 finished')})

fs.writeFile(".\\docs\\newFile.pdf", "Hello Amazing Stutern Team", () => {
  console.log("printed 2nd: write file process done");
});

fs.readFile(".\\docs\\newFile.pdf", () => {
  console.log("printed 3rd: I/O finished");

  // readfile callbacks
  setTimeout(() => {
    console.log("printed 5th: Timer 2 finished");
  }, 0);

  setTimeout(() => {
    console.log("printed 6th: Timer 3 finished");
    process.nextTick(() => console.log("printed 7th: process.nextTick()"));
  }, 3000);

  setImmediate(() => {
    console.log("printed 4th: Immediate 2 finished");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

console.log("printed 1st: server running on hope");

/**
libuv is written in pure C++  
is responsoble forevent-loop and threadpool
works in FIFO manner 

node js is writtenn in C++ and javascript

there 4 threadpools available by default

 */
