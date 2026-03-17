const prompt= require('prompt-sync') ();

let somaPares = 0;
let somaImpares = 0;
let totalPares = 0;
let totalImpares = 0;

console.log("🔢 ANÁLISE NUMÉRICA: 0 a 999");
console.log("=".repeat(45));

for (let numero = 0; numero <= 999; numero++) {
    if (numero % 2 === 0) {
        // Par
        somaPares += numero;
        totalPares++;
    } else {
        // Ímpar
        somaImpares += numero;
        totalImpares++;
    }
}


let mediaPares = somaPares / totalPares;
let mediaImpares = somaImpares / totalImpares;

console.log("\n📊 RESULTADOS:");
console.log(`Soma dos PARES: ${somaPares.toLocaleString("pt-BR")}`);
console.log(`Total de PARES: ${totalPares}`);
console.log(`Média dos PARES: ${mediaPares.toFixed(2)}`);
console.log(`\nSoma dos ÍMPARES: ${somaImpares.toLocaleString("pt-BR")}`);
console.log(`Total de ÍMPARES: ${totalImpares}`);
console.log(`Média dos ÍMPARES: ${mediaImpares.toFixed(2)}`);

console.log("\n🏆 DESAFIO - Comparação:");
if (somaPares > somaImpares) {
    console.log(`👑 PARES venceram! (maior soma: ${somaPares.toLocaleString("pt-BR")})`);
} else if (somaImpares > somaPares) {
    console.log(`👑 ÍMPARES venceram! (maior soma: ${somaImpares.toLocaleString("pt-BR")})`);
} else {
    console.log("🤝 Empate perfeito!");
}