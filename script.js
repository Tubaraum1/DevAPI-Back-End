document.getElementById('add-task').addEventListener('click', function() {
    let taskContent = document.getElementById('task-input').value;

    if (taskContent.trim() === "") {
        return;
    }

    let tasksContainer = document.getElementById('tasks-list');

    let listItem = document.createElement('li');
    listItem.className = 'task-entry';

    let contentSpan = document.createElement('span');
    contentSpan.textContent = taskContent;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.className = 'delete-task-btn';

    listItem.appendChild(contentSpan);
    listItem.appendChild(deleteButton);

    tasksContainer.appendChild(listItem);

    document.getElementById('task-input').value = "";

    contentSpan.addEventListener('click', function() {
        listItem.classList.toggle('finished');
    });

    deleteButton.addEventListener('click', function() {
        tasksContainer.removeChild(listItem);
    });
});
