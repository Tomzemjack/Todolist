//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");





// addEventlistener
todoButton.addEventListener("click" , addTodo)

todoList.addEventListener("click" , deleteCheck)




//function



function addTodo(event){
    event.preventDefault();

    if(todoInput.value == ""){
        alert("The job is empty.")
    }
    else{
        event.preventDefault();
        //To do div 
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")
        //Create Li
        const newTodo = document.createElement("li")
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo)
        //Checkmark button
        const completebutton = document.createElement("button");
        completebutton.innerHTML = '<i class="far fa-check-circle"></i>';
        completebutton.classList.add("complete-btn")
        todoDiv.appendChild(completebutton);
        //Trash button
        const trashbutton = document.createElement("button");
        trashbutton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        trashbutton.classList.add("trash-btn")
        todoDiv.appendChild(trashbutton);
        //Append to list
        todoList.appendChild(todoDiv)
        todoInput.value = "";
    }
    
}

//onclicks 

function deleteCheck(e){
    const item = e.target;
    //Delete Item
    if(item.classList[0] === 'trash-btn'){ 
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend' , function(){
            todo.remove();
        })
    }

    
    //CheckMark

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}