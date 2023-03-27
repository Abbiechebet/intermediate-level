
const repl = require('node:repl');
const msg = 'message';
repl.start('>').context.m  = msg;

// local.on('exit', () => {
//     console.log('exiting repl');
//     process.exit();
//   });

// let temperature = 75;
// console.log(`The temperature is ${temperature}`);