const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const ligntBoxImage = document.getElementById("lightbox-image");

const lightBox = document.querySelector('.lightbox')
const closeBtn = document.getElementById('close-btn');


function showLightBox(num){
  console.log(`it listened: ${num}`);
  lightBox.style.display = "flex";
  if (num == '1'){
    ligntBoxImage.src = "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg";
  }else if (num == '2'){
    ligntBoxImage.src = "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg";
  }else if (num == '3'){
    ligntBoxImage.src = "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg";
  }

}

function hideLightBox(){
    lightBox.style.display = "none";
}
 
lightBox.addEventListener('click', ()=>{ hideLightBox() })
closeBtn.addEventListener('click', ()=>{ hideLightBox() })


img1.addEventListener('click', ()=> { showLightBox('1'); });
img2.addEventListener('click', ()=> { showLightBox('2'); });
img3.addEventListener('click', ()=> { showLightBox('3'); });
