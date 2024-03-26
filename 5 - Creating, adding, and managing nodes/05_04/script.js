// Clone a list item and add it to a list
let taskList = document.getElementById('taskList');
let firstTask = taskList.firstElementChild.cloneNode(true);
firstTask.textContent = 'Prepare quarterly report';
taskList.appendChild(firstTask);