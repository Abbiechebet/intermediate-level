// const { default: axios } = require('axios');
const fs = require("fs");
const axios = require("axios");
//const { resolveCaa } = require('dns')

// fs.readFileSync(".\\docs\\newfile.txt")
// //is high level thus a blocking code

// fs.readFileSync(".\\docs\\newfile.json")

// fs.writefile(".\\docs\\newfile.txt", "Hello Backend", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);

//   fs.readFile(".\\docs\\newfile.txt", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     console.log(data);

//     fs.writefile(".\\docs\\newfile.txt", "Hello Backend", (err, data) => {
//       if (err) console.log(err);
//       console.log(data);

//       fs.readFile(".\\docs\\newfile.txt", "utf-8", (err, data) => {
//         if (err) console.log(err);
//         console.log(data);
//       });
//     });
//   });
// });

//promise
/*
--producing code is code that can take some time
--consuming code is code that must wait for the result
--promise is a javascript object that links producing code and consuming code
======read file is a producing code

*/
// const myPromise = new Promise((resolve, reject) =>{
//     fs.writeFile(".\\docs\\newfile.txt", "Hello Backend", (err, data)=>{
//        if (err) reject(err)
//        resolve(data)
//     })
// }).then(data=>console.log(data)).catch(err =>console.log(err))

// console.log(myPromise)



const newObj = {
  newkey: "Hello Backend Students",
};


// const myPromise = new Promise((resolve, reject) => {
//   fs.readFile(".\\docs\\newfile2.txt", "utf-8", (err, data) => {
//     if (err) {
//       reject(err);
//     }
//     resolve(data);
//   });
// })
//   .then((data) => {
//     if (data === newObj.newkey) {
//       return data;
//     }
//     throw "The data in the file is different from our object value";
//   })
//   //.then(data => data + ' Students')
//   .then(data => {
//     fs.writeFile(".\\docs\\newfile2.txt", data, (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       return data;
//     });
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("ran successfully"));

// console.log(myPromise);




// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.all([p1, p2, p3]).then((value)=>{
//    console.log(value)
// }).catch((err) => console.log(err))
// //console.log(data1, data2, data3);





//asyncfun ---synthetic sugar
const asyncFun = async function (arg) {
    try {
        const data = await fs.readFileSync(arg, 'utf-8');
        //const response = await fetch()
        console.log(data, "DOG BREED");
        const response = await axios.get(`https://dog.ceo/api/breed
        /${data.toLowerCase()}/images/random`);
        console.log(response.data)
        fs.writeFile(`./docs/dogImage.json`,JSON.stringify( {
            [data]: response.data.message}), (err) => console.log(err))
        console.log('DONE')
    } catch (err) { throw err }
}
asyncFun('./docs/newfile.txt')





const logger = (value)=>{
  console.log(value + " coming from the logger function");
  return value;
}

const readFilePro = function (path,encode){
return new Promise((resolve, reject)=>{
    fs.readFile(path, encode, function(err, data){
      if (err) reject(err)
      resolve (data)
    })
  })
}

const writeFilePro = (path, data)=>{
  return new Promise ((resolve, reject)=>{
     fs.writeFile(path, data, function(err, data){
      if (err) reject('Failed to write file: '+ path)
      resolve(data)
     })
  })
}

readFilePro('./docs/newfile.txt', "utf-8")
.then(data=>{
  return logger(data)
}).then(data=>{
 return writeFilePro('./docs/newfile3.txt', data)
}).catch(err=>{
    console.log(err)
  })

//costructor function returns an object
//I can manipulate data from the logger function
