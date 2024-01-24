// AppendChild Demo
let taskList = document.getElementById('taskList');
let newTask = document.createElement('li');
newTask.textContent = 'Organize team meeting';
taskList.appendChild(newTask);

// InsertBefore Demo
let urgentTask = document.createElement('li');
urgentTask.textContent = 'Review budget proposal';
taskList.insertBefore(urgentTask, taskList.firstChild);

// InnerHTML Demo
let dynamicContent = document.getElementById('dynamicContent');
dynamicContent.innerHTML = '<p>New project announcement coming soon!</p>';
