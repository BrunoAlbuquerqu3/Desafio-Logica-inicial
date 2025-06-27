class formaDeBolo {
    constructor(saborDaMassa, SaborRecheio){
        this.saborDaMassa = saborDaMassa
        this.SaborRecheio = SaborRecheio
    }
    toString(){
        console.log(`Bolo de ${this.saborDaMassa} com recheio de ${this.SaborRecheio}`)
    }
}

let boloFesta = new formaDeBolo ('Chocolate', 'Morango')

boloFesta.toString()
//console.log(boloFesta)