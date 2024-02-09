const container = document.querySelector('.gridHolder');

const gridsize = 20;

for(let i = 0; i<gridsize; i++){
    for(let j = 0; j<gridsize; j++){
        const tile = document.createElement('div'); //create div for 1 tile
        tile.classList.add('tile')                  //assign a classname to the tile so we can style it
        tile.style.height = '20px';
        tile.style.width = '20px';

    }
}