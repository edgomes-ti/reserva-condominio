import './UsersList.css';
import React, { useState, useEffect } from 'react';
import api from './api'; // Importa a instância configurada do Axios

const UsersList = () => {
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários
  const [error, setError] = useState(null); // Estado para armazenar erros, se houver

  // Função para buscar usuários do backend
  const fetchUsers = async () => {
    try {
      const response = await api.get('/users'); // Faz a requisição para a rota GET /users
      setUsers(response.data); // Atualiza o estado com os dados retornados
    } catch (err) {
      setError('Erro ao buscar usuários!'); // Atualiza o estado com uma mensagem de erro
    }
  };

  // useEffect para chamar a função de busca ao montar o componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostra erro, se houver */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Nome:</strong> {user.nome} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
