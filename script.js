let number = 16;
const container = document.getElementById('container');
let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

function createGrid(number){
  
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  
  for(let i = 0; i < number * number ;i++) {
    let grid = document.createElement('div');
    grid.style.border = "1px solid black";
    grid.style.backgroundColor = "white";
    grid.classList.add('gridSquare')
    container.appendChild(grid)
    // Add random color when div passed through
    grid.addEventListener('mouseenter', function() {
      let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
      grid.style.backgroundColor = `${randomColor}`;
    })
  }
}

  createGrid(number);

// Code below to clear grid, take input, and resize new grid

function clearGrid() {
      container.innerHTML = "";
    }

// Creating button function clear/prompt/draw new grid
const button = document.getElementById('reset');
button.addEventListener('click', function resize() {
  clearGrid();
  let size = prompt("Please enter a number (1-64) for rows/columns!")
    if (size < 1 || size > 64) {
      alert("ERROR! Please pick a number between 1 and 64!")
      return resize();
    } else {
      size = parseInt(size);
      createGrid(size);
    }
});
