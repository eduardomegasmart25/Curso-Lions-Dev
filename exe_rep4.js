const prompt= require('prompt-sync') ();

let salarios = [2500, 3200, 4100, 5000, 6200];

console.log("📊 Salários ANTES do reajuste:");
console.log(salarios.join(" | "));
console.log("=".repeat(45));

console.log("🔄 Aplicando reajuste de 10%...\n");

// Usando forEach para aplicar o reajuste de 10%
salarios.forEach((salarioAtual, indice) => {
    let salarioNovo = salarioAtual * 1.10;  // +10%
    salarios[indice] = salarioNovo;         // Atualiza o array
    
    console.log(`Dev ${indice + 1}: R$ ${salarioAtual.toFixed(0)} → R$ ${salarioNovo.toFixed(0)}`);
});

console.log("\n✅ REAJUSTE CONCLUÍDO!");
console.log("📈 Nova lista de salários:");
console.log(salarios.map(s => `R$ ${s.toFixed(0)}`).join(" | "));