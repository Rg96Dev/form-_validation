const form = document.getElementById("formulario") //usar querryselector

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // pausa de submit

    const campoAInput = document.getElementById("campoA")
    const campoBInput = document.getElementById("campoB")

    const campoA = parseFloat(campoAInput.value);
    const campoB = parseFloat(campoBInput.value);

    const validado = document.querySelector(".validado")
    const naoValidado = document.querySelector(".nao-validado")


    if (campoA < campoB) {
        validado.innerHTML = `Número A: <b>${campoA}</b> é menor que Número B: <b>${campoB}</b>!`;
        validado.style.display = "block"

        campoAInput.value = "";
        campoBInput.value = "";

    }
    else {// else = false
        naoValidado.innerHTML = `Número A: <b>${campoA}</b> é maior que Número B: <b>${campoB}</b>!`;
        naoValidado.style.display = "block"

        campoAInput.value = "";
        campoBInput.value = "";
    }
});





