let pantalla = document.querySelector("#pantalla")

pantalla.value = "0"


function subir(){
    let num = Number(pantalla.value)
    num++
    pantalla.value = num
}

function bajar(){
    let num = Number(pantalla.value)
    num--
    pantalla.value = num
}

let boton = document.querySelector("button")
console.log(boton)
console.log("querySelectorAll")

let botones = document.querySelectorAll("button")
console.log(botones[1])