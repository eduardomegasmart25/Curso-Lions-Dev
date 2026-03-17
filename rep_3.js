const prompt= require('prompt-sync') ();

let temperaturaAgua = 90;

console.log("🔥 AQUECEDOR DE ÁGUA");
console.log("=".repeat(40));

while (temperaturaAgua < 100) {
    console.log(`A temperatura está em ${temperaturaAgua} graus. Aquecendo...`);
    temperaturaAgua += 2;  // Aumenta 2 graus
}

console.log(`\n✅ Água fervendo! ${temperaturaAgua}°C atingidos!`);