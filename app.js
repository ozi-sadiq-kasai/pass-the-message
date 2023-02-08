let input = document.querySelector('#input-box');

function passMessage(){  
  document.querySelector("#output").innerHTML += input.value;
  input.value = '';
}

input.addEventListener("keydown",enter);

function enter(event){
  if(event.key == "Enter"){
    passMessage()
  }
}