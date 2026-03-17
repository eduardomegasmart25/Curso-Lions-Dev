const prompt= require('prompt-sync') ();


let tempInicial = parseFloat(prompt("Informe a temperatura inicial (°C):"));

console.log("🔥 INICIANDO CALIBRAÇÃO DOS SENSORES TÉRMICOS");
console.log("Temperatura inicial: " + tempInicial + "°C\n");


for (let i = 1; i <= 5; i++) {
    let tempCalibrada = tempInicial + (i * 2);
    console.log(`Passo ${i}: Sensor ${i} calibrado em ${tempCalibrada.toFixed(1)}°C`);
}

console.log("\n✅ Calibração concluída com sucesso!");