//tabela
let data = [
    { name: 'Washiner', age: 44 },
    { name: 'Hellen', age: 27 },
    { name: 'Shiro', age: 6 },
    { name: 'Mel', age: 15 },
];

//preencher a tabela
function populateTable() {
    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';

    data.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${item.name}</td><td>${item.age}</td>`;
        tableBody.appendChild(row);
    });
}

// Filtro pelo nome
function filterByName() {
    let input = document.getElementById('nameFilter');
    let filter = input.value.toUpperCase();
    let tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(row => {
        let name = row.getElementsByTagName('td')[0].innerText.toUpperCase();
        row.style.display = (name.indexOf(filter) > -1) ? '' : 'none';
    });
}

// Filtro pela idade
function filterByAge() {
    let input = document.getElementById('ageFilter');
    let filter = parseInt(input.value);
    let tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(row => {
        let age = parseInt(row.getElementsByTagName('td')[1].innerText);
        row.style.display = (isNaN(filter) || age === filter) ? '' : 'none';
    });
}

// Filtro pela coluna
function sortTable(columnIndex) {
    let table = document.getElementById('dataTable');
    let rows = Array.from(table.querySelectorAll('tbody tr'));
    let direction = table.rows[0].cells[columnIndex].getAttribute('data-sort') || 'asc';

    rows.sort((a, b) => {
        let aValue = a.cells[columnIndex].innerText;
        let bValue = b.cells[columnIndex].innerText;
        return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });

    table.querySelector('tbody').innerHTML = '';
    rows.forEach(row => table.querySelector('tbody').appendChild(row));
    table.rows[0].cells[columnIndex].setAttribute('data-sort', direction === 'asc' ? 'desc' : 'asc');
}

// iniciando a tabela
function initializeTable() {
    populateTable();

    let nameFilterInput = document.getElementById('nameFilter');
    let ageFilterInput = document.getElementById('ageFilter');

    nameFilterInput.addEventListener('input', filterByName);
    ageFilterInput.addEventListener('input', filterByAge);
}

document.addEventListener('DOMContentLoaded', initializeTable);
