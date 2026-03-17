const prompt= require('prompt-sync') ();

const carrinhos = [
    { cliente: "eduardo", produtos: [50.0, 120.5, 15.0] },
    { cliente: "Maria", produtos: [200.0, 45.9] },
    { cliente: "josé", produtos: [10.0, 5.5, 32.0, 8.0] }
];

let clientesPagos = [];


carrinhos.forEach((carrinho, index) => {
    console.log(`\n🛒 CARRINHO ${index + 1} - ${carrinho.cliente.toUpperCase()}`);
    console.log("Produtos:", carrinho.produtos);
    

    const totalDevido = carrinho.produtos.reduce((soma, preco) => soma + preco, 0);
    console.log(`💰 Total devido: R$ ${totalDevido.toFixed(2)}`);
    
    let totalPago = 0;
    
    
    do {
        let valorRecebido = parseFloat(prompt(`Pagamento para ${carrinho.cliente} (R$):`));
        
        if (isNaN(valorRecebido) || valorRecebido <= 0) {
            console.log("❌ Valor inválido!");
            continue;
        }
        
        totalPago += valorRecebido;
        console.log(`✅ Recebido: R$ ${valorRecebido.toFixed(2)} | Total pago: R$ ${totalPago.toFixed(2)}`);
        
    } while (totalPago < totalDevido);
    
  
    const troco = totalPago - totalDevido;
    if (troco > 0) {
        console.log(`💵 TROCO: R$ ${troco.toFixed(2)}`);
        console.log(`Troco para ${carrinho.cliente}: R$ ${troco.toFixed(2)}`);
    } else {
        console.log("✅ Pagamento exato!");
    }
    
    console.log(`🎉 ${carrinho.cliente} QUITADO!`);
    clientesPagos.push(carrinho.cliente);
});


console.log("\n" + "=".repeat(60));
console.log("📊 RELATÓRIO FINAL - FIM DO DIA");
console.log("=".repeat(60));
console.log("✅ CLIENTES QUE CONCLUÍRAM PAGAMENTO:");
clientesPagos.forEach(nome => console.log(`   • ${nome}`));
console.log(`\n🏪 Total de clientes atendidos: ${clientesPagos.length}`);
console.log("💼 Caixa do dia encerrado com sucesso!");