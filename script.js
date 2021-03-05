let rows = 0;
let columns = 0;

// ADD ROW -------------------------
const addRow = () => {
  const grid = document.getElementById("grid");
  const newRow = document.createElement("tr");

  // edge case: the table is empty
  if (columns == 0) columns = 1;

  // populate the row with squares
  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    cell.addEventListener("click",colorChange);
    newRow.appendChild(cell);
  }

  // append the new row with as many cols as necessary to existing grid
  grid.appendChild(newRow);

  // number of rows has now increased
  rows++;
};

// ADD COLUMN -------------------------
const addCol = () => {
  // get grid element
  const grid = document.getElementById("grid");

  // edge case: there are no rows to add a cell to
  if (rows == 0) {
    const row = document.createElement("tr");
    cell.addEventListener("click",colorChange);
    grid.appendChild(row);
    rows++;
  }

  // go through each row
  for (const row of grid.rows) {
    // populate the col with squares
    const cell = document.createElement("td");
    cell.addEventListener("click",colorChange);
    row.appendChild(cell);
  }

  // number of columns has now increased
  columns++;
};

// REMOVE ROW -------------------------
const deleteRow = () => {
  // end early if no rows exists
  if (rows == 0) return;

  // get grid
  const grid = document.getElementById("grid");

  // remove last child (row)
  grid.removeChild(grid.lastChild);

  // number of rows has now decreased
  rows--;

  // if rows becomes 0 reset columns
  if (rows == 0) columns = 0;
};

// REMOVE COLUMN -------------------------
const deleteColumn = () => {
  // end early if no columns exists
  if (columns == 0) return;

  // get grid
  const grid = document.getElementById("grid");

  // get rows
  let tableRows = document.getElementsByTagName("tr");

  // remove last child for each row
  for (const row of grid.rows) {
    row.removeChild(row.lastChild);
  }

  // number of columns has now decreased
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
  const grid = document.getElementById("grid");

  // iterate over grid rows
  for (const row of grid.rows) {
    // iterate over each row's col
    for (const col of row.cells) {
      // apply callback to the cell
      callback(col);
    }
  }
};

//Function to implement the Color Selector
let colorSelector = document.getElementById("color_choose"), color_change;
const colorSelect = () => {
  color_change = colorSelector.value;
};

// FILL UNCOLORED ------------------------
const uncoloredFill = () => {
  applyToCells(col => {
    // check to see if color was set for cell
    if (col.style.backgroundColor == "" || col.style.backgroundColor == "white") {
      // if no color was set, set to currently selected color
      col.style.backgroundColor = color_change;
    }
  });
};

// FILL ALL ------------------------------
const fill = () => {
  // set to currently selected color regardless of prev color
  applyToCells(col => (col.style.backgroundColor = color_change));
};

// CLEAR ALL -----------------------------
const clearAll = () => {
  // clear color regardless of prev color
  applyToCells(col => (col.style.backgroundColor = ""));
};

//Function to color the cell on user prompt
function colorChange(){
  this.style.backgroundColor = color_change;
};