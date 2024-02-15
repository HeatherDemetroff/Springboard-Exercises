let todoForm = document.getElementById('newTodoForm');
let todoList = document.getElementById('todoList');
// looks up local storage todo and parses it. if not found, creates empty array
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

for (let i = 0; i < savedTodos.length; i++) {
  // creates a list item named newTodo
  let newTodo = document.createElement("li");
  
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}


todoForm.addEventListener('submit', function(event){
    // makes it so when you submit a form the page does not change or reload
    event.preventDefault();
    let removedButton = document.createElement('button');
    removedButton.innerText = 'X';
    let newTodo = document.createElement('li');
    // gets the value from the task input and sets newTodo's inner text
    newTodo.innerText = document.getElementById('task').value;
    // adds a new todo item to the todo list
    todoList.appendChild(newTodo);
    // adds a button to the new todo item
    newTodo.appendChild(removedButton);
    // empties the task text input
    todoForm.reset();
    // save to localStorage
    savedTodos.push({ task: newTodo.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function(event) {
    // finds the element that was clicked
    let clickedListItem = event.target;
    // creates a variable to identify which tag was clicked on
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    // if isCompleted is not true then draw line-through and mark it as true
    if (!clickedListItem.isCompleted && targetTagToLowerCase === "li") {
      clickedListItem.style.textDecoration = "line-through";
      clickedListItem.isCompleted = true;
    } else {
      clickedListItem.style.textDecoration = "none";
      clickedListItem.isCompleted = false;
    }

    if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
    }

    for (let i = 0; i < savedTodos.length; i++) {
      if (savedTodos[i].task === clickedListItem.innerText) {
        savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
        localStorage.setItem("todos", JSON.stringify(savedTodos));
      }
    }
  });
  