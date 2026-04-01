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
const switchCore = {
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
}
