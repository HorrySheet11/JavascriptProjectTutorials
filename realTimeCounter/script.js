const textArea = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

function countLetters(){
  let text = textArea.value;
  let count= text.length;
  if (count >= 50){
    charCount.style.color = 'red';
    let fifty = textArea.value.substring(0,50);
    textArea.value = fifty;
  }else{
    charCount.style.color = 'black'
  }
  return charCount.innerHTML = `Character Count: ${count}/50`
  };

textArea.addEventListener("input", () => countLetters());

