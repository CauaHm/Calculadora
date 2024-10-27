function insert(num) {
    mostrarResultado = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerHTML = mostrarResultado + num;

}

function del() {
    document.querySelector('.result').innerHTML = ''
}

function back() {
    var resultado = document.querySelector('.result').innerHTML;

    document.querySelector('.result').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.querySelector('.result').innerHTML;
    if(resultado) {
        document.querySelector('.result').innerHTML = eval(resultado)
    }

}