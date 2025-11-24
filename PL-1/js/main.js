const txtNum1 = document.getElementById("num1");
const txtNum2 = document.getElementById("num2");
const txtNum3 = document.getElementById("num3");
const alertResultado = document.getElementById("resultado");

function validarNumero(valor) {
  if (valor.trim().length === 0){
    return false;
  }
  if (isNaN(valor)){
    return false;
  }
  return true;
}

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  txtNum1.style.border = "";
  txtNum2.style.border = "";
  txtNum3.style.border = "";
  alertResultado.style.display="none";
  alertResultado.innerHTML = "";
  let esValido = true;

  // validaciones
  if (!validarNumero(txtNum1.value)) {
    txtNum1.style.border = "solid medium red";
    esValido = false;
  }// validacion num1

  if (!validarNumero(txtNum2.value)) {
    txtNum2.style.border = "solid medium red";
    esValido = false;
  }// validacion num2

  if (!validarNumero(txtNum3.value)) {
    txtNum3.style.border = "solid medium red";
    esValido = false;
  }// validacion num3

  if (!esValido) {
    alertResultado.className = "alert alert-danger";
    alertResultado.style.display="block";
    alertResultado.innerHTML =
      "Por favor, ingresa solo números válidos en los tres campos.";
    return;
  }// Validacipones

  const num1 = Number(txtNum1.value);
  const num2 = Number(txtNum2.value);
  const num3 = Number(txtNum3.value);

  // si los tres son iguales
  if (num1 === num2 && num2 === num3) {
    alertResultado.className = "alert alert-info";
    alertResultado.style.display="block";
    alertResultado.innerHTML = `Los tres números son iguales: ${num1}, ${num2}, ${num3}`;
    return;
  }

  // ordenar
  const numeros = [num1, num2, num3];

  const mayorMenor = [...numeros].sort((a, b) => b - a);
  const menorMayor = [...numeros].sort((a, b) => a - b);

  alertResultado.className = "alert alert-primary";
  alertResultado.style.display="block";
  alertResultado.innerHTML =
  ` <p class="mb-1"><strong>De mayor a menor:</strong> ${mayorMenor.join(", ")}</p>
    <p class="mb-0"><strong>De menor a mayor:</strong> ${menorMayor.join(", ")}</p>`;
});
