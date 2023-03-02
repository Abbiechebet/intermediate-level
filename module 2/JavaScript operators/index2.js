// let cash = 1000;
// cash > 2000;

// EQUALITY OPERATOR
let cash = '2000'
let expenses = 2000;
// console.log(cash == expenses);
// console.log(cash === expenses);

console.log(true == 1);
console.log(true == 0);

// ternary operators
let myAge = 25;
//if age is greater than or equals to 18, print 'Eligible to Vote'
//if age is less than 18, print 'Not Eligible to Vote'

//(condition) ? true : false
//(myAge>=18 ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote))
(myAge >= 18) ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote');

//logical operators
let nationality = 'Nigerian';
(myAge >= 18 && nationality ==='Nigerian') ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote');
// true && true

//AND Operators - &&
// OR Operator - ||

let WAEC = 'PASS';
let NECO = 'PASS';
(WAEC === 'PASS' || NECO ==='PASS') ? console.log('Admitted') : console.log('Not Admitted');
(WAEC === 'PASS' || NECO ==='FAIL') ? console.log('Admitted') : console.log('Not Admitted');
(WAEC === 'FAIL' || NECO ==='PASS') ? console.log('Admitted') : console.log('Not Admitted');
(WAEC === 'FAIL' || NECO ==='FAIL') ? console.log('Admitted') : console.log('Not Admitted');

//OPERATOR PRECEDENCE
//BODMAS?

//PEMDAS ->  Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).

const result = (26 - 2) + 4 / 2
console.log(result);

// truthy values
//falsy values

//CONDITIONAL STATEMENTS
//IF...ELSE

// if (condition){
//     //output is when condition evaluates to true
//     } else{
//     //output is when condition evaluates to false
//     }


    //(myAge>=18) ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote)
    if (myAge => eligibleVoterAge){
        console.log('Eligible to Vote');
        //output is when condition evaluates to true
        } else{
            console.log('Eligible to Vote');
        //output is when condition evaluates to false
    }

        // IF...ELSE IF...ELSE...
        //we want to output the exact grade the student had based on their score
        // if score >= 70, A1
        //if score is between 65 & 69 B2
        //if score is between 60 & 64 B3
        //if score is between 55 & 59 C4
        //if score is between 50 & 54 C5
        //if score is between 45 & 49 C6
        //if score is between 40 & 44 C7
        //if score is between 31 & 39 E8
        //if score is below 30 F9

        //Edge Cases

        let mathScore = 120;

        if(mathScore >= 70 && mathScore <= 100){
            console.log("A1");
        }
        else if (mathScore >= 65 && mathScore <= 69) {
            console.log('B2');
        }
        else if (mathScore >= 60 && mathScore <= 64) {
            console.log('B3');
        }
        else if (mathScore >= 55 && mathScore <= 59) {
            console.log('C4');
        }
        else if (mathScore >= 50 && mathScore <= 54) {
            console.log('C5');
        }
        else if (mathScore >= 45 && mathScore <= 49) {
            console.log('C6');
        }
        else if (mathScore >= 40 && mathScore <= 44) {
            console.log('C7');
        }
        else if (mathScore >= 31 && mathScore <= 39) {
            console.log('E8');
        }
         else if (mathScore <= 30) {
             console.log('F9');
        }
        // condition for Edge cases
         else {
             console.log('Invalid Score');
        }
