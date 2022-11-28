/**function changeColor() {
    document.body.style.backgroundColor = 'green';
}*/

const buttonElement = document.getElementById('btn-green');
buttonElement.addEventListener('click',function() {
    document.body.style.backgroundColor = 'green'
});

document.getElementById('btn-green').addEventListener('click',function() {
    document.body.style.backgroundColor = 'green'
});