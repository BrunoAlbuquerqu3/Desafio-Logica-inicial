/*torrar()
injetarPao()


function torrar(){
    console.log("Torrando pão")
}

function injetarPao(){
    console.log("Preparando para Injetar pão")
    console.log("Finalizado")
}
    */

let userName = getFirstName("Bruno dos Graus")

console.log("Seja Bem Vindo!! "+userName)

function getFirstName(name){
    let firtName = name.split(" ")[0]
    return firtName
}