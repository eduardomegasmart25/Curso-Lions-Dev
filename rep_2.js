const prompt= require('prompt-sync') ();

let listaDeCompras = ["Arroz", "Feijão", "Macarrão", "Carne"];

console.log("🛒 LISTA DE COMPRAS");
console.log("=".repeat(25));


for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(`Item: ${listaDeCompras[i]}`);
}

console.log("=".repeat(25));
console.log(`Total de itens: ${listaDeCompras.length}`);