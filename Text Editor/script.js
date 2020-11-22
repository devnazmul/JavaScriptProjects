// MAIN FUNCTION
function updateText(){
  let inputText = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = inputText;
}



function makeBold(elem){
  elem.classList.toggle('act1');
  document.getElementById('text-output').classList.toggle('bold');
}
function makeItalic(elem){
  elem.classList.toggle('act1');
  document.getElementById('text-output').classList.toggle('italic');
}
function makeUnderline(elem){
    elem.classList.toggle('act1');
    let formatedText = document.getElementById('text-output');
    if (formatedText.classList.contains('underline')) {
      formatedText.classList.remove('underline');
    } else {
      formatedText.classList.add('underline');
    }
}
function alignText(elem, alignType){
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonList = document.getElementsByClassName('align');
  for (let index = 0; index < buttonList.length; index++) {
    buttonList[index].classList.remove('act2');
  }
  elem.classList.toggle('act2');
}