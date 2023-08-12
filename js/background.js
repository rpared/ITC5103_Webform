
let rectangle = document.getElementById('rectangle');

document.addEventListener('mousemove', function(event) {
  let mouseY = event.clientY;

  rectangle.style.top = mouseY + 'px';
}); 