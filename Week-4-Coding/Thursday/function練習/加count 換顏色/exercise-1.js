
let count = 0;

function addCount() {
    count++;
    const counterElement = document.querySelector("h1");
    counterElement.innerText = 'Counter : ' + count;}

function reset() {
    count = 0;
    const counterElement = document.querySelector("h1");
    counterElement.textContent = 'Counter : ' + count;
    }

// function changeColor() {
//   document.body.style.backgroundColor = 'green';
// }
function changeColorLightblue() {
    document.body.style.backgroundColor = 'lightblue';
}

function changeColorLightgreen() {
        if(document.body.style.backgroundColor == 'lightblue'){document.body.style.backgroundColor = 'lightgreen';}
        else {document.body.style.backgroundColor = 'pink';}
}