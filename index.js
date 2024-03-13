const express = require('express');
const db = require('./infrastructure/db.js');
const taskRouter = require('./routes/taskRouts.js');
const app = express();
const port = 3000;
app.use(express.json());
// Rota padrão

db.sync()

app.use('/tasks',taskRouter)

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});