const prompt= require('prompt-sync') ();

let pesoTotal = 0;
let caixasCarregadas = 0;
const capacidadeMaxima = 1000;

console.log("🚛 CARREGAMENTO DE CAMINHÃO");
console.log(`Capacidade máxima: ${capacidadeMaxima} kg`);
console.log("=".repeat(45));

do {
    let pesoCaixa = parseFloat(prompt(`Caixa ${caixasCarregadas + 1} - Peso (kg):`));
    
    
    if (isNaN(pesoCaixa) || pesoCaixa <= 0) {
        console.log("❌ Peso inválido! Digite um número positivo.");
        continue;
    }
    
  
    if (pesoTotal + pesoCaixa > capacidadeMaxima) {
        console.log(`\n🚨 ALERTA: Carga máxima atingida!`);
        console.log(`Caixa ${caixasCarregadas + 1} (${pesoCaixa}kg) REJEITADA`);
        console.log(`Peso atual: ${pesoTotal}kg / ${capacidadeMaxima}kg`);
        break;
    }
    
  
    pesoTotal += pesoCaixa;
    caixasCarregadas++;
    console.log(`✅ Caixa ${caixasCarregadas} carregada: ${pesoCaixa}kg`);
    console.log(`Total atual: ${pesoTotal.toFixed(1)}kg (${((pesoTotal/capacidadeMaxima)*100).toFixed(1)}%)\n`);
    
} while (true);

console.log("📋 RELATÓRIO FINAL DO CARREGAMENTO:");
console.log(`✅ Caixas carregadas: ${caixasCarregadas}`);
console.log(`📦 Peso total carregado: ${pesoTotal.toFixed(1)}kg`);
console.log(`📊 Utilização: ${((pesoTotal/capacidadeMaxima)*100).toFixed(1)}% da capacidade`);
console.log(`🚚 Caminhão pronto para despacho!`);

console.log(`✅ Carregamento concluído!\n${caixasCarregadas} caixas\n${pesoTotal.toFixed(1)}kg carregados`);