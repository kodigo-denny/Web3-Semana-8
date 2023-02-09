const reloj = document.querySelector("#reloj")
const reloj2 = document.querySelector("#reloj2")


let newContador=setInterval(()=>{
    let time = new Date()
    reloj.value = time.toTimeString()
    reloj2.innerHTML = time.toTimeString()
},500)
