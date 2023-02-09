class Automovil{
    marca
    modelo
    año
    color
    velocidadMax
    velocidad
    encendido

    constructor(marca, modelo, año, color, velocidadMax){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = color
        this.velocidadMax = velocidadMax
        this.velocidad = 0
        this.encendido = false
    }

    acelerar(){
        if(this.velocidad + 10 <= this.velocidadMax && this.encendido==true)
            this.velocidad += 10
        console.log(this)
    }

    bajarVelocidad(){
        if(this.velocidad-10 >= 0 && this.encendido == true)
            this.velocidad -= 10
        console.log(this)
    }

    encender(){
        this.encendido = true
        console.log(this)
    }

    apagar(){
        if(this.velocidad == 0)
            this.encendido = false
        console.log(this)
    }
}