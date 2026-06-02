const express = require('express');
const router = express.Router();

let tarefas = [
    {
        id: 1,
        descricao: 'Estudar REST',
        concluida: false
    }
];

let proximoId = 2;

// GET - listar todas as tarefas
router.get('/', (req, res) => {
    console.log('Listando todas as tarefas');
    res.json(tarefas);
});

// GET - buscar tarefa por id
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        });
    }

    res.json(tarefa);
});

// POST - criar tarefa
router.post('/', (req, res) => {
    const { descricao } = req.body;

    if (!descricao) {
        return res.status(400).json({
            erro: 'Descrição é obrigatória'
        });
    }

    const novaTarefa = {
        id: proximoId++,
        descricao,
        concluida: false
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});

// PUT - atualizar tarefa
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);

    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        });
    }

    tarefa.descricao = req.body.descricao ?? tarefa.descricao;
    tarefa.concluida = req.body.concluida ?? tarefa.concluida;

    res.json(tarefa);
});

// DELETE - remover tarefa
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = tarefas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        });
    }

    tarefas.splice(indice, 1);

    res.status(204).send();
});

module.exports = router;