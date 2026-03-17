const prompt= require('prompt-sync') ();

let tabuada = parseInt(prompt("Qual tabuada?")) || 5;

console.log(`\nTABUADA DO ${tabuada}:`);
for (let i = 0; i <= 100; i++) {
    console.log(`${tabuada} × ${i.toString().padStart(3,'0')} = ${tabuada * i}`);
}