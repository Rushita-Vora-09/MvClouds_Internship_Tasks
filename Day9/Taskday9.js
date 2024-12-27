const outerCircle = document.getElementById('outerCircle');
const container = document.querySelector('.container');
let draggableCircle = document.getElementById('draggableCircle');
let count = 0;

function getRandomColor() {
  let color = "#";
  let letters = "0123456789ABCDEF";
  for (i = 0; i < 6; i++) {
    color += letters[(Math.floor(Math.random() * 16))]
  }
  return color;
}

draggableCircle.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', null);
});

outerCircle.addEventListener('dragover', (event) => {
  event.preventDefault();
});

outerCircle.addEventListener('drop', (event) => {
    event.preventDefault();

    const outerRect = outerCircle.getBoundingClientRect();
    const draggableRect = draggableCircle.getBoundingClientRect();

    console.log(draggableRect.width)

    let newSize = draggableRect.width - 20;

    if (newSize <= draggableRect.width) {

        const newCircle = document.createElement('div');
        newCircle.className = 'circle';
        newCircle.style.width = `${newSize}px`;
        newCircle.style.height = `${newSize}px`;
        if (count == 0) {
            newCircle.style.backgroundColor = 'red';
            count++;
        } else {
        newCircle.style.backgroundColor = draggableCircle.style.backgroundColor;
        }
        newCircle.style.left = `${outerRect.width / 2 - newSize / 2}px`;
        newCircle.style.top = `${outerRect.height / 2 - newSize / 2}px`;
        outerCircle.appendChild(newCircle);

        if (draggableRect.width > 40) {
            const newDraggable = document.createElement('div');
            newDraggable.id = 'draggableCircle';
            newDraggable.className = 'circle';

            // newDraggable.style.width = '180px';
            newDraggable.style.width = `${draggableRect.width-40}px`
            // newDraggable.style.height = '180px';
            newDraggable.style.height = `${draggableRect.height-40}px`

            newDraggable.style.backgroundColor = getRandomColor();

            // newDraggable.style.left = '20px';
            newDraggable.style.left = draggableRect.left;

            // newDraggable.style.top = '20px';
            newDraggable.style.top = draggableRect.top;

            newDraggable.draggable = true;
            container.appendChild(newDraggable);


            draggableCircle.remove();
            draggableCircle = newDraggable;
        } else {
            draggableCircle.style.display = "none";
        }
            draggableCircle.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', null);
        });
    }
});
