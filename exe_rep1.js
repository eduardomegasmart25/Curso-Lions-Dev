const prompt= require('prompt-sync') ();

const senhaCorreta = "9876";

function verificarSenha() {
    let tentativa = prompt("Digite a senha numérica:");
    
    while (tentativa !== senhaCorreta) {
        console.log("Acesso negado: Senha incorreta");
        tentativa = prompt("Digite a senha numérica:");
    }
    
   
    console.log("Cofre liberado com sucesso!");
    console.log("✅ ACESSO AUTORIZADO - Cofre liberado!");
}


verificarSenha();
