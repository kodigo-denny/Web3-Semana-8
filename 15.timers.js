//setTimeout 

 const pantalla=document.querySelector('body')
 const display = document.querySelector("#display")
 let contador=0; 
 let newContador;
/*
 let retardo=setTimeout(()=>{

     pantalla.style.backgroundColor='green'
     clearTimeout(retardo)
     console.log('se ha limpiado el retardo')

 },5000)
*/

//setInteval *****************************************************************************

function iniciar(){
    newContador=setInterval(()=>{
        display.value = contador
        contador++
    },1000)
}

function detener(){
    clearInterval(newContador)
}

/*
 let contador=0; 
 let newContador=setInterval(()=>{
     contador>10 ? clearInterval(newContador) : console.log(contador++)
 },1000)
 */

//window.requestAnimationFrame()*****************************************************************

 function holaMundo(){
   let saludo=window.requestAnimationFrame(holaMundo)
    
   console.log('hola mundo')

   saludo>50 ? window.cancelAnimationFrame(saludo):null

 }

 holaMundo()

