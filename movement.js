let mousePosition;
let offset = [0, 0];
let isDown = false;

const container = document.getElementById('mainContainer');
container.style.position = "absolute";
container.style.left = "calc((100vw - 104.4px)/2)";
container.style.top = "calc((100vh - 29px)/2)";

container.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        container.offsetLeft - e.clientX,
        container.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x: event.clientX,
            y: event.clientY

        };
        container.style.left = (mousePosition.x + offset[0]) + 'px';
        container.style.top = (mousePosition.y + offset[1]) + 'px';
    }
}, true);