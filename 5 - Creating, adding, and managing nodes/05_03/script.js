// AppendChild Demo
let taskList = document.getElementById('taskList');
let newTask = document.createElement('li');
newTask.textContent = 'Organize team meeting';
taskList.appendChild(newTask);