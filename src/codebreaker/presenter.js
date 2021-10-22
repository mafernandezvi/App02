import CodeBreaker from "./codebreaker.js";

const boton_elem = document.querySelector("#arriesgo");
const cb = new CodeBreaker("5", 3);

boton_elem.addEventListener("click", (event) => {
  event.preventDefault();
  const numero_elem = document.querySelector("#numero");
  
  const resultado = document.querySelector("#resultado");

  
  resultado.innerHTML = cb.arriesgar(numero_elem.value);
 
});