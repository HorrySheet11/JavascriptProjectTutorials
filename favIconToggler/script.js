const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const filled = "&#10084";
const notFilled= '&#9825'

function bigIcon(button){
  if (button.classList.contains("filled")){
    button.classList.remove("filled");
    button.innerHTML=notFilled;
  }else{
    button.classList.add("filled")
    button.innerHTML=filled;
  }

}

btn1.addEventListener("click", () => bigIcon(btn1));
btn2.addEventListener("click", () => bigIcon(btn2));
btn3.addEventListener("click", () => bigIcon(btn3));
