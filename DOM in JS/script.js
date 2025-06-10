// Initial tasks array
const initialTasks = [
    "Buy milk",
    "Buy phone",
    "Buy tomatoes",
    "Buy potatoes",
    "Buy yogurt",
];

// Todo list state
let todos = [];
let nextId = 1;

// Get DOM elements
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const totalTasksSpan = document.querySelector(".total-tasks");
const completedTasksSpan = document.querySelector(".completed-tasks");
const clearCompletedBtn = document.querySelector(".clear-completed");
const clearAllBtn = document.querySelector(".clear-all");


function initApp(){
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const storedNextId = parseInt(localStorage.getItem("nextId"));

    if(Array.isArray(storedTodos)){
        todos = storedTodos;
        nextId = storedNextId || (Math.max(...todos.map(t => t.id), 0) + 1)
    }
    else {
        todos = []
        initialTasks.forEach(task => addTodoItem(task));
    }

    renderAllTodos(true)
    updateStats()
}

function saveToLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("nextId", nextId.toString());
}

function addTodoItem(text){
    const todo = {
        id: nextId++,
        text: text,
        completed: false,
    }
    todos.push(todo)
    saveToLocalStorage();


    const li = createTodoElement(todo)
    li.classList.add("fade-in")
    todoList.insertBefore(li, todoList.firstChild)
    updateStats()
}

function createTodoElement(todo){
    const li = document.createElement("li");
    li.className = "todo-item"
    li.dataset.id = todo.id

    if (todo.completed){
        li.classList.add("completed")
    }

    li.innerHTML = `
                <input type="checkbox" class="todo-checkbox" ${
        todo.completed ? "checked" : ""
    }>
                <span class="todo-text">${todo.text}</span>
                <button class="delete-btn">Delete</button>
            `;

    const checkbox = li.querySelector(".todo-checkbox");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("change", () => toggleTodoWithAnimation(todo.id))
    deleteBtn.addEventListener("click", () => deleteTodoWithAnimation(todo.id))

    return li;
}

function updateStats(){
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;

    totalTasksSpan.textContent = total;
    completedTasksSpan.textContent = completed;

    updateProgressRing("total-progress", total, Math.max(total, 10))
    updateProgressRing("completed-progress", completed, Math.max(total, 1))
}

function updateProgressRing(id, current, max){
    const circle = document.getElementById(id);
    const circumference = 2 * Math.PI * 26
    const progress = max > 0 ? (current / max) * circumference : 0;
    const offset = circumference - progress;

    circle.style.strokeDashoffset = offset;
}

function renderAllTodos(animate = false){
    const sortedTodos = getSortedTodos();
    todoList.innerHTML = ""

    sortedTodos.map((todo, index) => {
        const li = createTodoElement(todo)
        if (animate) {
            li.style.animationDelay = `${index * 50}ms`
            li.classList.add("fade-in")
        }

        todoList.appendChild(li)
        return li
    })
    updateStats()
}

function getSortedTodos(){
    return [...todos].sort((a,b) => {
        if (a.completed === b.completed) {
            return a.id - b.id;
        }
        return a.completed ? 1 : -1
    })
}

function toggleTodoWithAnimation(id) {
    const todo = todos.find((t) => t.id === id);
    const todoElement = document.querySelector(`[data-id="${id}"]`)

    if (todo && todoElement) {
        todo.completed = !todo.completed
        saveToLocalStorage();


        if (todo.completed) {
            todoElement.classList.add("dropping")
            setTimeout(() => {
                todoElement.classList.remove("dropping")
                renderAllTodos(false)
            }, 800)
        } else {
            todoElement.classList.add("rising")
            setTimeout(() => {
                todoElement.classList.remove("rising")
                renderAllTodos(false)
            }, 600)
        }
        updateStats()
    }
}


function deleteTodoWithAnimation(id){
    const todoElement = document.querySelector(`[data-id="${id}"]`)
    if (todoElement) {
        todoElement.style.animation = "fadeOut 0.3s ease-out forwards"

        setTimeout(() => {
            todos = todos.filter((t) => t.id !== id)
            saveToLocalStorage()
            renderAllTodos(false)
        }, 300)
    }
}

function clearCompleted(){
    const completedElements = document .querySelectorAll(".todo-item.completed")


    Array.from(completedElements).map((element,index) => {
        element.style.animation = `fadeOut 0.3s ease-out ${index * 100}ms forwards`
        return element
    })
    setTimeout(() =>{
        todos = todos.filter((todo) => !todo.completed)
        saveToLocalStorage()
        renderAllTodos(true)
    }, completedElements.length * 100 + 300)
}

function clearAll(){
    const allElements = document.querySelectorAll(".todo-item")

    Array.from(allElements).map((element,index) => {
        element.style.animation = `fadeOut 0.3s ease-out ${index * 50}ms forwards`
        return element
    })
    setTimeout(() =>{
        todos = []
        saveToLocalStorage()
        renderAllTodos(true)
    }, allElements.length * 100 + 300)
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();

    if (text){
        addTodoItem(text);
        todoInput.value = "";
        updateStats();
    }
})

clearCompletedBtn.addEventListener("click", clearCompleted)
clearAllBtn.addEventListener("click", clearAll)

initApp();

