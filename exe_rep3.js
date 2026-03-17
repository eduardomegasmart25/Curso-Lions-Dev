const prompt= require('prompt-sync') ();

let total = 0;


do {
    let valorItem = parseFloat(prompt("Digite o valor do item (R$):"));
    
    if (isNaN(valorItem) || valorItem <= 0) {
        console.log("❌ Valor inválido! Digite um valor numérico positivo.");
        continue;
    }
    
    total += valorItem;
    console.log(`✅ Item adicionado: R$ ${valorItem.toFixed(2)} | Subtotal: R$ ${total.toFixed(2)}`);
    
} while (prompt("Deseja adicionar mais algum item? (sim/nao)").toLowerCase() === "sim");


console.log("\n🍔 COMBO FINALIZADO!");
console.log(`💰 VALOR TOTAL A SER PAGO: R$ ${total.toFixed(2)}`);
console.log(`Pedido finalizado!\nTotal a pagar: R$ ${total.toFixed(2)}`);