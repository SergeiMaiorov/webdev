const hoverText = document.getElementById('trigger');
const picture = document.getElementById('target');

function changePicture() {
  picture.src = 'img/picB.jpg';
}
function resetPicture() {
  picture.src = 'img/picA.jpg';
}

hoverText.addEventListener('mouseover', changePicture);
hoverText.addEventListener('mouseout', resetPicture);