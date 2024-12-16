import React from 'react';
import UserForm from './UserForm'; // Importa o componente de formulário
import UsersList from './UsersList'; // Importa o componente de listagem de usuários

const App = () => {
  return (
    <div>
      {/* Exibe o formulário para cadastrar novos usuários */}
      <UserForm />
      
      {/* Exibe a lista de usuários cadastrados */}
      <UsersList />
    </div>
  );
};

export default App;
