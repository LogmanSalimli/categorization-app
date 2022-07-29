const htmlStyle = document.documentElement.style;
htmlStyle.fontSize = '16px';

const enlarger = document.querySelector('#enlarger');
const reducer = document.querySelector('#reducer');

const sizeSelector = document.querySelector('#sizeSelector');
function selected() {
    htmlStyle.fontSize = sizeSelector.value * 16 / 100 + 'px';
}

function enlarge() {
    if (+htmlStyle.fontSize.slice(0, -2) < 24) {
        // htmlStyle.fontSize = +htmlStyle.fontSize.slice(0, -2) + 1.6 + 'px';
        sizeSelector.value = (+htmlStyle.fontSize.slice(0, -2) * 100 / 16 + 10).toFixed(1);
        selected()
        console.log(htmlStyle.fontSize)
        console.log(sizeSelector.value)
    } else {
        alert('Maximum size limit reached.')
    }
}

function reduce() {
    if (+htmlStyle.fontSize.slice(0, -2) > 8) {
        // htmlStyle.fontSize = +htmlStyle.fontSize.slice(0, -2) - 1.6 + 'px';
        sizeSelector.value = (+htmlStyle.fontSize.slice(0, -2) * 100 / 16 - 10).toFixed(1);
        selected()
        console.log(htmlStyle.fontSize)
        console.log(sizeSelector.value)
    } else {
        alert('Minimum size limit reached.')
    }
}

sizeSelector.addEventListener('change', selected);
enlarger.addEventListener('click', enlarge);
reducer.addEventListener('click', reduce);