const res = document.getElementById("res");
const formulaInput = document.getElementById("formula");
const resultadoInput = document.getElementById("res");

function adicionar(valor) {
    res.value += valor;
}

function calcular() {
    formulaInput.value = res.value;
    resultadoInput.value = eval(res.value);
}

function limpar() {
    res.value = formulaInput.value = resultadoInput.value = '';
}
