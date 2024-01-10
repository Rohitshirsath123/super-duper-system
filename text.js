let todoList = [];

function renderTodoList() {
    const todoListContainer = document.getElementById("todoList");
    const totalTasksSpan = document.getElementById("totalTasks");
    
    todoListContainer.innerHTML = "";
    totalTasksSpan.textContent = todoList.length;

    todoList.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = todo.text;

        if (todo.completed) {
            listItem.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTodoItem(index));

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => toggleTodoStatus(index));

        listItem.appendChild(checkbox);
        listItem.appendChild(deleteButton);

        todoListContainer.appendChild(listItem);
    });
}

function addTodo() {
    const newTodoInput = document.getElementById("newTodo");
    const newTodoText = newTodoInput.value.trim();

    if (newTodoText !== "") {
        todoList.push({ text: newTodoText, completed: false });
        newTodoInput.value = "";
        renderTodoList();
    }
}

function deleteTodoItem(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function toggleTodoStatus(index) {
    todoList[index].completed = !todoList[index].completed;
    renderTodoList();
}

// Initial rendering
renderTodoList();
