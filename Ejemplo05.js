function sobreTxt(id){
    console.log("Mouse over")
    const txt = document.querySelector("#"+id)
    txt.style.backgroundColor = "gray"
}

function seleccion(){
    console.log("Seleccion")
}

function cambio(){
    console.log("Cambio")
}

function afueraTxt(id){
    const txt = document.querySelector("#"+id)
    txt.style.backgroundColor = "White"
}

function movimiento(){
    //console.log("Movimiento")
}

function pierdeFoco(id){
    console.log("Se ha perdido el foco: " + id)
    const txt = document.querySelector("#"+id)
    txt.style.backgroundColor = "White"
}


function obtieneFoco(id){
    console.log("Obtuvo el foco: " + id)
    const txt = document.querySelector("#"+id)
    txt.style.backgroundColor = "Yellow"
}

function cambioTexto(id){
    console.log("Cambio el texto: " + id)
}

function cerrando(){
    alert("Cerrando")
    console.log("Cerrando")
}

function mensajeError(){
    alert("Error")
}

function evento(){
    alert("click")
}

function evento2(){
    alert("doble click")
}

function key_down(){
    console.log("Key down")
}

function key_press(){
    console.log("Key press")
}

function key_up(){
    console.log("Key up")
}

function cargado(){
    //alert("Finaliza la carga de la pagina")
}


function mouse_down(){
    console.log("mouse down")
}

function mouse_up(){
    console.log("mouse up")
}