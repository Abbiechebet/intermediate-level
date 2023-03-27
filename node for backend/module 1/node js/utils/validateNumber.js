function numberValidator(num){
    if(num >=1000){
        console.log('Number is not valid')
    }
    return num
}

module.exports = {numberValidator} //when key and value is same
//module.exports = {validateNumber : validateNumber}
//module.exports = {functionThatvalidatesNumber : validateNumber}
//const imported = 