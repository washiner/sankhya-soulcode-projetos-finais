document.addEventListener('DOMContentLoaded', function() {
    
    let form = document.getElementById('dynamicForm');
    let addFieldButton = document.getElementById('addFieldButton');

    addFieldButton.addEventListener('click', function() {
        addField();
    });

    function addField() {
        let fieldContainer = document.createElement('div');
        fieldContainer.className = 'field-container';

        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Digite algo...';

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function() {
            form.removeChild(fieldContainer);
        });

        fieldContainer.appendChild(input);
        fieldContainer.appendChild(removeButton);
        form.appendChild(fieldContainer);
    }
});
