// Importa o Express para gerenciar rotas
const express = require('express');
const router = express.Router();
const db = require('../db/dbconfig'); // Importa a configuração do banco de dados

// Rota para cadastrar um usuário
router.post('/register', (req, res) => {
  // Obtém os dados do corpo da requisição
  const { nome, email, senha } = req.body;

  // Verifica se todos os campos obrigatórios foram fornecidos
  if (!nome || !email || !senha) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  // Verifica se o email já está cadastrado
  const queryCheck = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(queryCheck, [email], (err, results) => {
    if (err) {
      console.error('Erro ao verificar email:', err);
      return res.status(500).send('Erro no servidor.');
    }

    // Se o email já existir, retorna um erro
    if (results.length > 0) {
      return res.status(400).send('Email já cadastrado.');
    }

    // Caso o email não exista, insere o novo usuário
    const queryInsert = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.query(queryInsert, [nome, email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        return res.status(500).send('Erro ao cadastrar o usuário.');
      }
      // Retorna mensagem de sucesso ao cadastrar
      res.status(201).send('Usuário cadastrado com sucesso!');
    });
  });
});

// Rota para listar todos os usuários
router.get('/', (req, res) => {
  // Query SQL para selecionar todos os usuários
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao listar usuários:', err);
      return res.status(500).send('Erro ao listar usuários');
    }
    // Retorna os usuários em formato JSON
    res.status(200).json(results);
  });
});

// Exporta o router para que seja usado no server.js
module.exports = router;
