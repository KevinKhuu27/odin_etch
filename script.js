const container = document.querySelector('.container');

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


createGrid(32);