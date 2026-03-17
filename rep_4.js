const prompt= require('prompt-sync') ();

let lotes = [50, 40, 60, 30, 70];
let totalIngressos = 0;

console.log("🎫 VENDAS DE INGRESSOS POR LOTE");
console.log("=".repeat(35));

for (let i = 0; i < lotes.length; i++) {
    totalIngressos += lotes[i];
    console.log(`Lote ${i + 1}: ${lotes[i]} ingressos`);
}

console.log("=".repeat(35));
console.log(`O total de ingressos vendidos foi: ${totalIngressos}`);