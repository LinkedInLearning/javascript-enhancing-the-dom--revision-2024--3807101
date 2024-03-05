document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todoList');
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const removeFirstTaskButton = document.getElementById('removeFirstTaskButton');
    const prioritizeLastTaskButton = document.getElementById('prioritizeLastTaskButton');

    // Add new task
    addTaskButton.addEventListener('click', () => {
        let task = newTaskInput.value;
        if (task) {
            let li = document.createElement('li');
            li.textContent = task;
            todoList.appendChild(li);
            newTaskInput.value = '';
        }
    });

    // Remove the first task
    removeFirstTaskButton.addEventListener('click', () => {
        if (todoList.children.length > 0) {
            todoList.removeChild(todoList.children[0]);
        }
    });

    // Prioritize the last task
    prioritizeLastTaskButton.addEventListener('click', () => {
        if (todoList.children.length > 1) {
            let lastTask = todoList.lastElementChild;
            todoList.insertBefore(lastTask, todoList.firstElementChild);
        }
    });
});
