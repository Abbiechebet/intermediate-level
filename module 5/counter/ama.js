//problem statement
/**
create a counter program

basic rules to abide by:
*the counter must begin at 0
*the increment button must increase the count by 1
*the decrement button must decrease the count by 1
*the reset button must reset the count back to 0
*the decrement button must not decrement the count if it is at 0.
(negative should not be therein the zero)
 */

//initial value of the conter
let count = 0;

//get all the elements we ant to work with
let displayElement = document.getElementById("display");
let incrementButtonElement = document.getElementById("increment");
let decrementButtonElement = document.getElementById("decrement"); 
let resetButtonElement = document.getElementById("reset"); 

//increase count by one and assigns value of count to the display element
function increaseCount() {
    count++;
    displayElement.textContent = count;
}

//decrease count by one and assigns value of count to the display element
function decreaseCount() {
    if(count !== 0){
        count--;
    }
    displayElement.textContent = count;
}

//resets the count to zero 
//assigns value of count to display element
function resetCount() {
    count = 0;
    displayElement.textContent = count;
}

incrementButtonElement.addEventListener("click", increaseCount);
decrementButtonElement.addEventListener("click", decreaseCount);
resetButtonElement.addEventListener("click", resetCount);



