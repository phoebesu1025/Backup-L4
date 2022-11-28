// function changeColor() {
//   document.body.style.backgroundColor = 'green';
// }
document.getElementById('btn-green').addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue'
  });

  function changeColor() {
    document.body.style.backgroundColor = 'green';
  }
  const btnElement = document.getElementById('btn-green');
  btnElement.addEventListener('click', changeColor);