let rows = 0;
let columns = 0;
// TODO: change this dynamically based on selector
let color = "navy";

// ADD ROW -------------------------
const addRow = () => {
  let grid = document.getElementsByTagName("table")[0];
  let newRow = document.createElement("tr");

  // edge case: the table is empty
  if (columns == 0) columns = 1;

  // Populate the row with squares
  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    newRow.appendChild(cell);
  }
  grid.appendChild(newRow);
  rows += 1;
};

// ADD COLUMN -------------------------
const addCol = () => {
  let grid = document.getElementsByTagName("table")[0];
  let tableRows = document.getElementsByTagName("tr");

  // edge case: there are no rows to add a cell to
  if (rows == 0) {
    grid.appendChild(document.createElement("tr"));
    rows++;
  }

  // Populate the col with squares
  for (let i = 0; i < rows; i++) {
    let cell = document.createElement("td");
    tableRows[i].appendChild(cell);
  }
  columns += 1;
};

// REMOVE ROW -------------------------
const deleteRow = () => {
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
};

// REMOVE COLUMN -------------------------
const deleteColumn = () => {
  // end early if no columns exists
  if (columns == 0) {
    return;
  }

  // get grid
  let grid = document.getElementsByTagName("table")[0];

  // get rows
  let tableRows = document.getElementsByTagName("tr");

  // remove last child for each row
  for (let i = 0; i < rows; i++) {
    let row = tableRows[i];
    row.removeChild(row.lastChild);
  }

  // decrement column count
  columns--;

  // if columns becomes 0 reset row count and delete rows
  if (columns == 0) {
    grid.innerHTML = "";
    rows = 0;
  }
};

// helper function to apply an effect to all cells
// takes in a callback which is given the current cell
const applyToCells = callback => {
  // get grid
  let grid = document.getElementsByTagName("table")[0];

  // iterate over grid rows
  for (const row of grid.rows) {
    // iterate over each row's col
    for (const col of row.cells) {
      // apply callback to the cell
      callback(col);
    }
  }
};

// FILL UNCOLORED ------------------------
const uncoloredFill = () => {
  applyToCells(col => {
    // check to see if color was set for cell
    if (col.style.backgroundColor == "") {
      // if no color was set, set to currently selected color
      col.style.backgroundColor = color;
    }
  });
};

// FILL ALL ------------------------------
const fill = () => {
  applyToCells(col => {
    // set to currently selected color regardless of prev color
    col.style.backgroundColor = color;
  });
};
