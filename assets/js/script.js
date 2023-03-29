const grid = document.querySelector(".grid-container")
const max = 100;
for(let i = 0; i < max; i++)
{
  const cella = document.createElement("div")
  cella.classList.add("cell")
  if(!(i%Math.sqrt(max)))
  {
    const row = document.createElement("div")
    row.classList.add("grid-row")
    grid.append(row);
  }
  const row = document.querySelector(".grid-row:last-child")
  row.append(cella);
}