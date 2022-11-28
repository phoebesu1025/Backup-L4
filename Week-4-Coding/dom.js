/*const changeColor = () => {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "pink";
    } else if (document.body.style.backgroundColor === "pink") {
        document.body.style.backgroundColor = "lightblue"
    } else {document.body.style.backgroundColor = "white"}
    }
*/
let currentColorIndex = -1;
// Function to be called on button being clicked
function changeColor() {
    const colorArray = ['yellow', 'pink', 'lightblue', 'lightgreen', 'lightcoral', 'cyan'];

    if (currentColorIndex === 5) {
        currentColorIndex = 0;// goes from index 5 to index 0, ie orange to white
    } else {
        currentColorIndex++
    } document.body.style.backgroundColor = colorArray[currentColorIndex];
}

//Stores the element found by getElementById in a variable
const helloWorldHeaderElement = document.querySelector('#helloWorldHeader'); 

helloWorldHeaderElement.style.fontSize = '30px';
helloWorldHeaderElement.style.fontFamily = 'arial';
helloWorldHeaderElement.textContent = "My text is changed~~~~yeahh!!!!:D"