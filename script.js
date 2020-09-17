const container = document.getElementById('container');
let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

function createGrid(numberOfRows, numberOfColumns){
  
  container.style.gridTemplateColumns = `repeat(${numberOfRows}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numberOfColumns}, 1fr)`;
  
  for(let i = 0; i < numberOfRows * numberOfColumns ;i++) {
    let grid = document.createElement('div');
    grid.style.border = "1px solid black";
    grid.classList.add('addColor');
/*    Cool effect but not what we're looking for here!
      grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = `${randomColor}`;
    }) */
console.log(grid)
    container.appendChild(grid);
  }
}

  createGrid(3, 3);

