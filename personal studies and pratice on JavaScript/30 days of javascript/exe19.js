/**
 *  Closure
 * 
If inner function access the variables of outer function then it is 
called closure.

*/
//Exercises
//Exercises: Level 1
///Create a closure which has one inner function

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

//console.log(innerFunc())
//console.log(innerFunc())
//console.log(innerFunc())



//Exercises: Level 2
//Create a closure which has three inner functions

function outerFunction() {
    const outerVariable = 'I am an outer variable';
  
    function firstInnerFunction() {
      console.log(`${outerVariable} from the first inner function`);
    }
  
    function secondInnerFunction() {
      console.log(`${outerVariable} from the second inner function`);
    }
  
    function thirdInnerFunction() {
      console.log(`${outerVariable} from the third inner function`);
    }
  
    return {
      firstInnerFunction,
      secondInnerFunction,
      thirdInnerFunction
    };
  }
  
  const closure = outerFunction();
  closure.firstInnerFunction(); 
  closure.secondInnerFunction(); 
  closure.thirdInnerFunction(); 



/*Create a personAccount out function. It has firstname, lastname, 
incomes, expenses inner variables. It has totalIncome, totalExpense, 
accountInfo,addIncome, addExpense and accountBalance inner functions. 
Incomes is a set of incomes and its description and expenses is also a 
set of expenses and its description.*/
function personAccount(firstName, lastName) {
    const incomes = [];
    const expenses = [];
  
    function addIncome(description, amount) {
      incomes.push({ description, amount });
    }
  
    function addExpense(description, amount) {
      expenses.push({ description, amount });
    }
  
    function totalIncome() {
      let total = 0;
      for (const income of incomes) {
        total += income.amount;
      }
      return total;
    }
  
    function totalExpense() {
      let total = 0;
      for (const expense of expenses) {
        total += expense.amount;
      }
      return total;
    }
  
    function accountInfo() {
      console.log(`Name: ${firstName} ${lastName}`);
      console.log(`Incomes:`);
      for (const income of incomes) {
        console.log(`${income.description}: $${income.amount}`);
      }
      console.log(`Expenses:`);
      for (const expense of expenses) {
        console.log(`${expense.description}: $${expense.amount}`);
      }
    }
  
    function accountBalance() {
      const balance = totalIncome() - totalExpense();
      return balance;
    }
  
    return {
      addIncome,
      addExpense,
      accountInfo,
      accountBalance
    };
  }
  
  const person = personAccount('John', 'Doe');
  person.addIncome('Salary', 5000);
  person.addIncome('Bonus', 1000);
  person.addExpense('Rent', 1500);
  person.addExpense('Groceries', 500);
  person.accountInfo();
  console.log(`Account balance: $${person.accountBalance()}`);
  