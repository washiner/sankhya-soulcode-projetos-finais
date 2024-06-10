function addTask() {

    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {

        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = taskText;
        span.className = 'task-text';

        let editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = function() {
            let newText = prompt('Edite a tarefa:', span.textContent);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
            }
        };

        let doneButton = document.createElement('button');
        doneButton.textContent = 'Concluir';
        doneButton.onclick = function() {
            span.style.textDecoration = span.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        };

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(doneButton);
        li.appendChild(removeButton);

        let taskList = document.getElementById('taskList');
        taskList.appendChild(li);

        taskInput.value = '';
    } else {
        alert("Digite uma tarefa.");
    }

    taskInput.focus();
}
