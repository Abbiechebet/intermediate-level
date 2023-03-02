/**
for
for...of
for...in
while
do...while
forEach
 */

//for
for (let i=0; i<5; i++){
    console.log('loop ' + i);
    if(i===3) break;
}
console.log('decrement')
for (let i=5; i>0; i--){
    console.log('loop ' + i);
}

const names = ['john', 'job', 'joe', 'joy'];
for (let i=0; i<names.length; i++){

    console.log(names [i]);
    if(i===4) break;

    console.log(i + " " + names);
    if(i===2) break;
}

//for...of
for(name of names){
     console.log(name);
}
for(name of names) console.log(name);

//for...in
const user = {firstname: 'Mamai', lastName: 'Kandie'};
for (key in user)
console.log(key +' ' + user[key]);

//while
let i = 0;
while(i <10) {
    //i++; //i += 1 //skips 0 and starts from 1 to 10
    console.log(i + "  Iam a Stutern Student");
    i++; //i += 1 // starts from 0 to 9
}

let j = 0;
while(j <10) {
    j++; // counts from 1 to 4 jumps 5 then continues to 10
    if (j===5)continue;
    console.log(j + "  Stutern Student");
    //j++; // counts from 0 to 4  
}

//do...while
let k = 0;
do{
    //k++; // counts from 1 to 4 jumps 5 then continues to 10
    if (k===5)continue;
    console.log(k + "  Track Software Development Student");
    k++; // counts from 0 to 4    
}while(k <10) 

//forEach
const animals = ['cat', 'dog', 'horse', 'sheep', 'turkey'];
animals.forEach(animal => {
    console.log(animal);
})