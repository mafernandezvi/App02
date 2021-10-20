const numero_elem = document.querySelector("#numero");
const boton_elem = document.querySelector("#arriesgo");
const resultado = document.querySelector("#resultado");

boton_elem.addEventListener("click", (event) => {
  event.preventDefault();
  resultado.innerHTML = "Ganaste!";
});
