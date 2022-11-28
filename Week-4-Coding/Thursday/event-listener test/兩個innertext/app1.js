// Element which contains the text input
const inputElement = document.querySelector('input');
// Adding a listener on that element
inputElement.addEventListener('input', (event) => {
    // Get the 'value' from the event source
    const message = event.target.value;
    const letterCount = message.length;
    updateCount(letterCount);
});
// Updating the displayed value of the count 
function updateCount(letterCount) {
    const letterCountElement = document.querySelector('p');
    letterCountElement.innerText = 'Letter Count : 0' + letterCount;
}

/*------------------------------------*/

const buttonElement = document.querySelector('#sumbtn');

// Adding a listener on that element
buttonElement.addEventListener('click', calculateSum);

function calculateSum() {
    const num1String = document.querySelector('#num1').value;
    const num2String = document.querySelector('#num2').value;
    const num1 = parseInt(num1String);
    const num2 = parseInt(num2String);
    const result = num1 + num2;
    updateResult(result);
}
 function updateResult(result) {
    const resultElement = document.getElementById('result'); 
    resultElement.innerText = 'result :' + result;
 }
