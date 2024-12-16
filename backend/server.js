// Carrega as variáveis de ambiente do arquivo .env (por exemplo, configurações do banco de dados)
require('dotenv').config();

// Importa o framework Express, que facilita a criação de servidores web
const express = require('express');

// Importa o middleware CORS para permitir requisições de outras origens (Cross-Origin Resource Sharing)
const cors = require('cors');

// Importa as rotas de reservas e usuários
const reservasRoutes = require('./routes/reservas');
const userRoutes = require('./routes/userRoutes');

// Cria uma instância do servidor Express
const app = express();

// Define a porta em que o servidor será executado (por padrão 5000, mas pode ser alterada via variável de ambiente)
const PORT = process.env.PORT || 5000;

// Middleware CORS: Permite que o frontend (http://localhost:3000) acesse o backend (http://localhost:5000)
app.use(cors());

// Middleware para interpretar JSON no corpo das requisições HTTP
app.use(express.json());

// Usa as rotas de reservas, acessíveis em "/reservas"
app.use('/reservas', reservasRoutes);

// Usa as rotas de usuários, acessíveis em "/users"
app.use('/users', userRoutes);

// Rota padrão para testar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// Faz o servidor ouvir na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
