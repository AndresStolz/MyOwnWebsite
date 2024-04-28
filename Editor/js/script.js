const disabledArea = document.querySelector('.disabled').classList;
const inputEdit = document.querySelector('.input-edit');
const buttonCreate = document.querySelector('.add-row');
const buttonRemove = document.querySelector('.remove-row');
const buttonEdit = document.getElementById('button-edit');
const buttonDownload = document.getElementById('downloadexcel');

buttonDownload.addEventListener('click', e => {
  let table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll('#table'));
})

let activeCell;
getAllCells();

function chooseCell(cell) {
  let actives = document.getElementsByClassName('active');
  for (let active of actives) {
    active.classList.remove('active');
  }
  cell.classList.add('active')
}

function valueEdit(cell) {
  let valueEdited = document.querySelector('.input-edit').value;
  console.log(valueEdited);
  cell.innerHTML = valueEdited;
}

function addRow(name, type, age) {
   let tableBody = document.querySelector('.tbody');
   tableBody.insertAdjacentHTML (
     'beforeend',
     `<tr>
      <td class="table-cell">${name}</td>
      <td class="table-cell">${type}</td>
      <td class="table-cell">${age}</td>
      </tr>`
   );
}

function removeRow (row) {
  row.remove();
}

function getAllCells() {
  let cells = document.querySelectorAll(".table-cell");
  for (let cell of cells) {
    cell.addEventListener('click', e => {
      activeCell = cell;
      chooseCell(cell);
      let cellValue = cell.innerHTML;
      inputEdit.value = cellValue;
      disabledArea.remove('disabled');
    })
  }
}

buttonEdit.addEventListener('click', e => {
  valueEdit(activeCell);
})

buttonCreate.addEventListener('click', e => {
  let inputName = document.querySelector('.input-name');
  let inputType = document.querySelector('.input-type');
  let inputAge = document.querySelector('.input-age');
  addRow(inputName.value, inputType.value, inputAge.value);
  getAllCells();
})

buttonRemove.addEventListener('click', e => {
  let row = activeCell.parentNode;
  removeRow (row);
})






