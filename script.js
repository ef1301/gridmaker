let rows = 0;
let columns = 0;
// TODO: change this dynamically based on selector
let color = "navy";

// ADD ROW -------------------------
function addRow() {
  let grid = document.getElementsByTagName("table")[0];
  let newRow = document.createElement("tr");

  // edge case: the table is empty
  if (columns == 0) columns = 1;

  // Populate the row with squares
  for (let i = 0; i < columns; i++){
    let cell = document.createElement("td");
    newRow.appendChild(cell);
  }
  grid.appendChild(newRow);
  rows += 1;
}

// ADD COLUMN -------------------------
function addCol() {
  let grid = document.getElementsByTagName("table")[0];
  let tableRows = document.getElementsByTagName("tr");

  // edge case: there are no rows to add a cell to
  if (rows == 0) {
    grid.appendChild(document.createElement("tr"));
    rows++;
  }

  // Populate the col with squares
  for(let i = 0; i < rows; i++){
    let cell = document.createElement("td");
    tableRows[i].appendChild(cell);
  }
  columns += 1;
}

// REMOVE ROW -------------------------
function deleteRow() {
  // end early if no rows exists
  if (rows == 0) {
    return;
  }

  // get grid element
  let grid = document.getElementsByTagName("table")[0];

  // remove last child (row)
  grid.removeChild(grid.lastChild);
  rows--;

  // if rows becomes 0 reset columns
  if (rows == 0) {
    columns = 0;
  }

}

// REMOVE COLUMN -------------------------
function deleteColumn() {
  // end early if no columns exists
  if (columns == 0) {
    return;
  }

  // get grid
  let grid = document.getElementsByTagName("table")[0];

  // get rows
  let tableRows = document.getElementsByTagName("tr");

  // remove last child for each row
  for(let i = 0; i < rows; i++){
    console.log(i);
    let row = tableRows[i];
    row.removeChild(row.lastChild);
  }

  // decrement column count
  columns--;

  // if columes becomes 0 reset row count and delete rows
  if (columns == 0) {
    grid.innerHTML = "";
    rows = 0;
  }

}
