let rows = 0;
let columns = 0;

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
