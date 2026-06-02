const express = require('express');
const tarefasRouter = require('./routes/tarefas');

const app = express();

app.use(express.json());

app.use('/tarefas', tarefasRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});