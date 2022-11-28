const box1Element = document.querySelector('#box1');
const box2Element = document.querySelector('#box2');

/*
box1Element.addEventListener('mouseover', function() {
    box1Element.style.backgroundColor='black';
});

box2Element.addEventListener('mouseover',function(){
    box2Element.style.backgroundColor='blueviolet';
});*/

function changeToRed(event) {
    //document.boy=> selecting the body element.
    //event.target => selecting the element wehre the event originated
    event.target.style.background = 'red';

}
box1Element.addEventListener('mouseover',changeToRed);
box2Element.addEventListener('mouseover',changeToRed);


//Element which contains the text input
const inputElement = document.querySelector('input');

//Adding a listener on that element
inputElement.addEventListener('input',function(event){
    //Get the 'value' from the event source
    console.log(event.target.value);
})

