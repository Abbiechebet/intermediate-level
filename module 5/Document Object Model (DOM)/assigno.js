let textInput = document.querySelector("#text-input");
let addButton = document.querySelector("#add-button");
let todosContainer = document.querySelector(".todos-container");

let todoList = []; 
// let items = document.querySelectorAll('li p')

// for(let i = 0; i < items.length; i++){
//     todoList.unshift(items[i]);
// }

function uniqueId(){
    let rtn = '';
    let ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ID_LENGTH = 5;
    for(let i = 0; i < 5; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
}

function taskLength(){
    return textInput.value.length;
}
function addItem(){
    const uniqueNum = uniqueId();
    if (taskLength() != 0){

//create li element and append it to the parent
    let todosItemContainer = document.createElement('li');
    todosContainer.appendChild(todosItemContainer);

//create p element and append it to the li
    let todosItem = document.createElement('p');
    todosItem.innerHTML = textInput.value;
    todosItemContainer.appendChild(todosItem);
    todosItem(uniqueNum);
    //todosItemContainer.prepend(todosItem);

    //create edit button
    let editButton = document.createElement('button');
    editButton.id = 'edit-button';
    editButton.innerText = 'Edit';
    todosItemContainer.appendChild(editButton);
    
    
//create delete button
    let deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
    deleteButton.innerText = 'Delete';
    todosItemContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', () =>{
        todosItem.remove('todosItem' + uniqueNum)
    })
    } else {
        clearInput();
    }
}

function clearInput() {
    textInput = document.getElementById('text-input');
    textInput.value = '';
}

function deleteBtn(){
    if(taskLength() > 0){
        addItem();
    }
}

todosItem = document.querySelector("p");
todosItem.innerText = localStorage.getItem('value');

    textInput.addEventListener('keyup', display);
    function display(){
        localStorage.setItem('value', textInput.value);
    }

addButton.addEventListener('click', addItem);
addButton.addEventListener('click', clearInput);
deleteButton.addEventListener('click', deleteBtn);
textInput.addEventListener('keyup', display);