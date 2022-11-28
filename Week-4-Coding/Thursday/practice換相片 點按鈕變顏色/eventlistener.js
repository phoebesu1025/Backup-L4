

/*const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    //alert("叫妳按就按啊?")
    this.innerText = "按屁阿!";
    this.style.color = "pink";
})

const img = document.getElementById("img");
img.addEventListener('mouseover', function(){
    this.src = "protrait5.jpg";
})

img.addEventListener('mouseout', function(){
    this.src = "protrait7.jpg";
})
*/
const lastPhoto = document.getElementById('nextPhotoBtn');
lastPhoto.addEventListener('click', function(){ 
    document.getElementById('photoNz').src = "protrait7.jpg";
})