//const {numberValidator} = require('.//utils//validateNumber')
const imported = require('.//utils//validateNumber')
const fs = require ('fs')
// when importing from node module there is no dot (.)

fs.writeFile('message.txt', "Hello World", (err)=> {
    if(err) throw err;
    console.log('The file has been saved!');
    //other code logic takes place from this point
});

fs.readFile('message.txt', {encoding:"utf-8"}, (err, data)=> {
    // string "utf-8" or an object {encoding:"utf-8"}
    if(err) throw err;
    console.log(data);
});


fs.writeFile('//message.pdf', "Hello World", (err)=> {
    if(err) {
        console.error(err)
       throw err;
    } 
    console.log('The file has been saved!');
    //other code logic takes place from this point
});

fs.readFile('.//docs//message.pdf', {encoding:"utf-8"}, (err, data)=> {
    // string "utf-8" or an object {encoding:"utf-8"}
    if(err) throw err;
    console.log(data);
});

/**
 * libuv c++
 
 * 
 */
console.log('App running');

process.on('message', (codeObj) => {
    console.log('message', codeObj);
    //any logic takes place here
});

process.on('exit', (code) => {
    console.log(`exit event with code: ${code}`);
});

process.emit('message', {code:90});
process.exit(1);

//working directory/ current directory is when node is initialized


//console.log(numberValidator(1001), "THE RETURNED OBJECT")
// console.log(imported.numberValidator(1001), "THE RETURNED OBJECT")
// //console.log(validateNumber(1001).functionThatvalidatesNumber, "THE RETURNED OBJECT")
// const value = imported.numberValidator(2000) * imported.numberValidator(10);
// //console.log({value})
// for(let i = 0; i < value; i++){
//    // console.log({i})
// }
//console.log(module);
//module is globally available variable
// console.log(__filename);
// console.log(__dirname);
//console.log(process);
//console.log(process.env);
//console.log(process.argv);
//cli flags or arg

// const args = [process.argv[2], process.argv[3], process.argv[4] ]
// let total = 0;
// for(let arg of args){
//     total += +arg
//     //total += Number(arg)
// //number module is globally availlable and is used to change string to number
// }
//console.log(total);


// //distructuring objects
// const obj = {
//     name: 'MaryJane',
//     age: 20,
//     sex: 'female'
// }
// const{name, age, sex } = obj;
// console.log(name, age, sex)