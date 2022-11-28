

const inputElement = document.querySelector('input');
inputElement.addEventListener('input',function(event){
    const message = event.target.value;
    const letterCount = message.length;
    updateCount(letterCount);
})

//Updating the disyed value of the count
function updateCount(letterCount) {
    const letterCountElement = document.querySelector('p');
    letterCountElement.innerText = 'word count: ' + letterCount
}