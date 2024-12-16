const express = require('express');
const router = express.Router();
const db = require('../db/dbconfig');

// Rota para listar todas as reservas
router.get('/', (req, res) => {
  const query = 'SELECT * FROM reservas';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar reservas:', err);
      return res.status(500).send('Erro ao buscar reservas');
    }
    res.status(200).json(results);
  });
});

// Rota para criar uma nova reserva
router.post('/', (req, res) => {
  const { usuario_id, data_reserva, hora_inicio, hora_fim } = req.body;

  // Verifica se todos os campos obrigatórios foram fornecidos
  if (!usuario_id || !data_reserva || !hora_inicio || !hora_fim) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  const query =
    'INSERT INTO reservas (usuario_id, data_reserva, hora_inicio, hora_fim) VALUES (?, ?, ?, ?)';
  db.query(
    query,
    [usuario_id, data_reserva, hora_inicio, hora_fim],
    (err, result) => {
      if (err) {
        console.error('Erro ao criar reserva:', err);
        return res.status(500).send('Erro ao criar reserva');
      }
      res.status(201).send('Reserva criada com sucesso!');
    }
  );
});

module.exports = router;
