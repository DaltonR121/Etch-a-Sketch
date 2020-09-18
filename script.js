let number = 64;
const container = document.getElementById('container');
let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

function createGrid(number){
  
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  
  for(let i = 0; i < number * number ;i++) {
    let grid = document.createElement('div');
    grid.style.border = "1px solid black";
    container.appendChild(grid)

    // Add random color when div passed through
    grid.addEventListener('mouseenter', function() {
      let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
      grid.style.backgroundColor = `${randomColor}`;
    })

  }
}

  createGrid(number);

  function color(div) {
      
  }