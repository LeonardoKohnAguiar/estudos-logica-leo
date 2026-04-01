// Simulação de Nivel de Acesso (Active Directory)
/*const usuario = "leonardo";
const nivelPermissao = "admin"; // Tente mudar o user depois de testar

if (nivelPermissao === "admin") {
    console.log("Acesso concedido! Bem-vindo ao servidor principal. ");
} else {
    console.log("Acesso negado. Nivel de permissão insuficiente para  " + usuario)
}*/

// --------------------------------------------------------------------------------------------------------------------

// Simulação de um Ativo Detalhado 
/*const switchCore = {
    nome: "Switch Core Alphaville",
    marca: "Cisco",
    portasOcupadas: 42,
    totalPortas: 48,
    status: "online"
};

console.log("--- Verificação de Ativo ---");
console.log("Equipamento: " + switchCore.nome);

// Lógica de capacidade 
if (switchCore.portasOcupadas > 40) {
    console.log("ALERTA: Poucas portas disponiveis neste switch!");
} else {
    console.log("Capacidade do Switch está estável.");
}*/

// --------------------------------------------------------------------------------------------------------------------

const chalk = require('chalk');

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
// NOVO: Array de Objetos (Nosso "Banco de Dados" local)
// ==========================================
const dataCenter = [
    { equipamento: "Switch Core Alphaville", temp: 35 },
    { equipamento: "Roteador BGP Piso 1", temp: 62 },
    { equipamento: "Servidor de Banco de Dados", temp: 85 },
    { equipamento: "Firewall Principal", temp: 45 },
    { equipamento: "Nobreak Geral", temp: 78 }
];

console.log(chalk.magenta.bold("\n=== 🔄 INICIANDO VARREDURA DO DATACENTER ==="));

// O Loop Mágico: Para cada 'item' dentro de 'dataCenter', execute a função
dataCenter.forEach(item => {
    monitorarEquipamento(item.equipamento, item.temp);
});

console.log(chalk.magenta.bold("=== ✅ VARREDURA CONCLUÍDA ===\n"));