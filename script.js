const container = document.querySelector('.container');

function makeSizeBtn ()
{
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');

    const sizeBtn = document.createElement('btn');
    sizeBtn.addEventListener('click', () => {
        clearGrid();
        createGrid(getSize());
    })
    sizeBtn.textContent = "Change Size!";

    btnDiv.appendChild(sizeBtn);
    container.appendChild(btnDiv);
}

function clearGrid ()
{
    let rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        container.removeChild(row);
    }) 
}

function createGrid (size)
{
    for (var i = 0; i < size; i++)
    {
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = "row" + i;
    
        for (var j = 0; j < size; j++)
        {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "yellow";
            });
            row.appendChild(cell);
        }
    
        container.appendChild(row);
    }
}

function getSize () 
{
    let size = -1;
    while (size < 0 || size > 100)
    {
        size = prompt("Size of grid (Max 100): ");
    }    
    return size;
}

makeSizeBtn();
createGrid(32);