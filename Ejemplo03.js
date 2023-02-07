let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")

let lista  = document.querySelector("#lista")

function limpiar(){
    lista.innerHTML = ""
}

/*
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
*/
function operar(op){
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let resultado
    let listaHtml = lista.innerHTML

    if(op == 1){
        resultado = sumar(n1, n2)
        lista.innerHTML = `${listaHtml}<li>La suma de ${n1} y ${n2} es : ${resultado}</li>`
    }
    else if(op == 2){
        resultado = restar(n1, n2)
        lista.innerHTML = `${listaHtml}<li>La resta de ${n1} y ${n2} es : ${resultado}</li>`
    }
    else if(op == 3){
        resultado = multiplicar(n1, n2)
        lista.innerHTML = `${listaHtml}<li>La multiplicación de ${n1} y ${n2} es : ${resultado}</li>`
    }
    else if(op == 4){
        resultado = dividir(n1, n2)
        lista.innerHTML = `${listaHtml}<li>La división de ${n1} y ${n2} es : ${resultado}</li>`
    }
}

function sumar(n1, n2){
    return n1 + n2
}

function restar(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}