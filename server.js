const express = require('express'); // 1. Puxa o framework web
const fs = require('fs');           // 2. Puxa o leitor de arquivos

const app = express();              // 3. Inicia o aplicativo
const PORTA = 3000;                 // 4. Define a porta


// Nossas rotas (Endpoints)
// Rota 1: Traz TODOS os equipamentos
app.get('/api/equipamentos', (req, res) => {
    const dadosBrutos = fs.readFileSync('equipamentos.json', 'utf8');
    const dataCenter = JSON.parse(dadosBrutos);
    res.json(dataCenter);
});

// Rota 2: Traz APENAS os críticos (> 75 graus)
app.get('/api/criticos', (req, res) => {
    const dadosBrutos = fs.readFileSync('equipamentos.json', 'utf8');
    const dataCenter = JSON.parse(dadosBrutos);
    
    // O filtro
    const equipamentosCriticos = dataCenter.filter(item => item.temp > 75);
    res.json(equipamentosCriticos);
});

// Ligando o servidor
app.listen(PORTA, () => {
    console.log(`🚀 Servidor da Engemon no ar!`);
    console.log(`👉 Todos: http://localhost:${PORTA}/api/equipamentos`);
    console.log(`🔥 Críticos: http://localhost:${PORTA}/api/criticos`);
});