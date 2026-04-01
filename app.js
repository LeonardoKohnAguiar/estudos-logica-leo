const chalk = require('chalk');
const fs = require('fs'); // Novo módulo: File System (Sistema de Arquivos)

// Nossa função de monitoramento "Engemon Style"
function monitorarEquipamento(nome, temperatura) {
    if (temperatura > 75) {
        console.log(chalk.bgWhite.red.bold(`🚨 ALERTA CRÍTICO: ${temperatura}°C - ${nome}`));
    } else if (temperatura > 50) {
        console.log(chalk.yellow(`⚠️ ATENÇÃO: ${temperatura}°C - ${nome}`));
    } else {
        console.log(chalk.green(`✅ ESTÁVEL: ${temperatura}°C - ${nome}`));
    }
}

// ==========================================
// A MÁGICA DO BACK-END: LENDO ARQUIVO EXTERNO
// ==========================================
console.log(chalk.magenta.bold("\n=== 📂 BUSCANDO DADOS DO ARQUIVO EXTERNO ==="));

// 1. O Node.js vai no disco e lê o arquivo como se fosse um texto normal
const dadosBrutos = fs.readFileSync('equipamentos.json', 'utf8');

// 2. Transformamos o texto em Objetos que o JavaScript entende (Array de Objetos)
const dataCenter = JSON.parse(dadosBrutos);

// 3. O Loop trabalha normalmente com os dados que vieram de fora!
dataCenter.forEach(item => {
    monitorarEquipamento(item.nome, item.temp);
});

console.log(chalk.magenta.bold("=== ✅ MONITORAMENTO CONCLUÍDO ===\n"));