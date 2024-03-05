// Clone a list item and add it to a list
let taskList = document.getElementById('taskList');
let firstTask = taskList.firstElementChild.cloneNode(true);
firstTask.textContent = 'Prepare quarterly report';
taskList.appendChild(firstTask);

// Replace a paragraph with a new one
let announcements = document.getElementById('announcements');
let newAnnouncement = document.createElement('p');
newAnnouncement.textContent = 'New office opening next month.';
let oldAnnouncement = document.getElementById('announcementText');
announcements.replaceChild(newAnnouncement, oldAnnouncement);

// Remove an element from the page
let removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', () => {
    if (announcements.firstChild) {
        announcements.removeChild(announcements.firstChild);
    }
});
