const display = document.querySelector("#display"); //este query es porque toma el id display//
const buttons = document.querySelectorAll("button"); // este queryall es para tomar todos los botones que tengan el nombre button

buttons.forEach((item) => {
  //item es la representacion para acceder a todos los botones
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == backspace) {
      let string = display.innerText.toString(); //con toSTRING convertimos todo lo que le pasemos en una cadena de caracteres ejemplo:"52*2/2+24/"
      display.innerText = string.substr(0 , string.length -1);
    } else if (display.innerText != "" && item.id == "equal") {
      //si display (pantalla de visualizacion es diferente de un string vacio y es igual al signo =)
      display.innerText = eval(display.innerText); //con eval metodo para que funcione las operaciones matemticas como por eje: "2+2"
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "null";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});


const theemetogglebtn = document.querySelector(".theme-toggler");
const calculator =document.querySelector(".calculator");

let isdark = true;
theemetogglebtn.onclick=()=>{
  calculator.classList.toggle("dark")
  theemetogglebtn.classList.toggle("active")
  isdark != isdark;
}