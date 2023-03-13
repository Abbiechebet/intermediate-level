
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function math(a,b,callback){
    return callback(a,b);
}
console.log('returns ' + math(1,4,add)); // returns 5
console.log('returns ' + math(5,5,subtract)); // returns 0


// each = ([1,2,3,4], function(val){
//     console.log(val);
// });
// each([1,2,3,4]);

var each = function(val){
    return (val*2);
};
each([1,2,3,4], val*2)
console.log(each);


// map = map([1,2,3,4]), function(val){
//     return val * 2;
// }; // [2,4,6,8]
// map();
// //console.log(val)

// var reject = ([1,2,3,4], function(val){
//     return val > 2;
// });
// //console.log(val) // [1,2]

// var reject = ([2,3,4,5], function(val){
//     return val % 2 === 0;
// }); 
// //console.log(val)// [3,5]