/*
onblur(): se pierde el foco.
onchange(): al modificar el valor del componente.
onbeforeunload(): se lanza al intentar cerrar una ventana.
onclick(): al hacer clic en un elemento.
ondblclick(): al hacer doble click.
onerror(): si se produce un error al cargar la página web o una imagen.
onfocus(): cuando un componente obtiene el foco.
onkeydown(): al pulsar cualquier tecla.
onkeypress(): al pulsar una tecla correspondiente a un carácter.
onkeyup(): al leventar cualquier una tecla.
onload(): se produce al terminar de cargarse la página web o una imagen.
onmousedown(): al presionar un botón del ratón.
onmousemove(): se ha movido el ratón.
onmouseout(): el cursor del ratón sale del área ocupada por un elemento.
onmouseover(): el cursor del ratón entra en el área ocupada por un elemento.
onmouseup(): al dejar de presionar un botón del ratón.
onresize(): al redimensionar una ventana o frame.
onselect(): cuando se selecciona un texto.
onunload(): al salir de la página web.
*/ 


const boton=document.querySelector('button')
const cuerpo=document.querySelector('body')
const formulario=document.querySelector('#formulario')
const ancho = document.querySelector("#ancho")
const alto = document.querySelector("#alto")
const txtX = document.querySelector("#txtX")
const txtY = document.querySelector("#txtY")



function pulsar(){
    alert('Has pulsado correctamente')
}
 
window.addEventListener('resize',(e)=>{
    cuerpo.style.backgroundColor='green'
    cuerpo.style.width='100%'
    cuerpo.style.height='1000px'
    console.log(e.target)
    ancho.value = e.target.innerWidth
    alto.value = e.target.innerHeight
})



ancho.addEventListener('focus',(e)=>{
    formulario.style.backgroundColor='orangered'
    console.log(e)
})

ancho.addEventListener('blur',(e)=>{
    formulario.style.backgroundColor='black'
    console.log(e)
})

ancho.addEventListener('change',(e)=>{
    cuerpo.style.backgroundColor='yellow'
})
/*
boton.addEventListener('click',(e)=>{
    cuerpo.style.width='300px'
    cuerpo.style.height='300px'
    //cuerpo.style.backgroundColor='blue'
    console.log(e)
})
*/
boton.addEventListener('mousedown', (a)=>{
    console.log(a)
})

document.addEventListener('mouseup', (e) =>{
    ancho.value = e.x
    alto.value = e.y
    console.log(e)
})

document.addEventListener('mousemove',(e)=>{
    txtX.value = e.x
    txtY.value = e.y
})

/*
formulario.addEventListener('click',cambiaAlto)


function cambiaAlto(){
    formulario.style.height='100px'
}
*/