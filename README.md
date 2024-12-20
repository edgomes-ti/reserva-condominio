# Reservas Condomínio

Este é um projeto desenvolvido como estudo e também para oferecer ao condomínio residencial em que trabalho. Ele foi criado para gerenciar reservas de áreas comuns de um condomínio, utilizando tecnologias modernas como React e um banco de dados local com XAMPP.

## Funcionalidades

- **Gerenciamento de Reservas**: Permite que os usuários façam reservas de áreas comuns do condomínio.
- **Notificação de Conflitos**: Verifica automaticamente conflitos de horário durante o agendamento.
- **Visualização das Reservas**: Apresenta uma lista clara e detalhada de todas as reservas realizadas.

## Tecnologias Utilizadas

- **Frontend**: React.js (Create React App).
- **Backend**: PHP com servidor local XAMPP.
- **Banco de Dados**: MySQL.
- **Estilização**: CSS.
- **Controle de Versão**: Git e GitHub.

## Requisitos para Replicação

### Ferramentas Necessárias

- [Node.js](https://nodejs.org/)
- [XAMPP](https://www.apachefriends.org/)
- [Git](https://git-scm.com/)

### Configuração do Ambiente

1. **Clone este repositório**:

   ```bash
   git clone https://github.com/edgomes-ti/reservas-condominio.git
   cd reservas-condominio
   ```

2. **Instale as dependências do projeto**:

   ```bash
   npm install
   ```

3. **Inicie o servidor React**:

   ```bash
   npm start
   ```

   A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000).

4. **Configuração do Banco de Dados**:

   - Instale e configure o XAMPP.
   - Crie um banco de dados chamado `reservas_condominio`.
   - Importe o arquivo `database.sql` (localizado na pasta `backend`) para configurar as tabelas necessárias.

5. **Configuração do Backend**:

   - Copie a pasta `backend` para o diretório `htdocs` do XAMPP.
   - Inicie o servidor Apache e MySQL pelo painel do XAMPP.
   - Certifique-se de que o backend está funcionando em: [http://localhost/backend](http://localhost/backend).

## Passos Desenvolvidos

### Etapas do Desenvolvimento

1. **Criação do Projeto com Create React App**:

   ```bash
   npx create-react-app reservas-condominio
   ```

2. **Implementação da Interface**:
   - Criação de componentes para exibir e gerenciar reservas.
   - Utilização de `useState` e `useEffect` para gerenciar o estado e as requisições ao backend.

3. **Configuração do Backend**:
   - Implementação de scripts PHP para CRUD de reservas.

4. **Integração com Banco de Dados**:
   - Configuração de tabelas no MySQL para armazenar dados de reservas.

5. **Testes**:
   - Testes manuais para validação do funcionamento correto.

## Como Contribuir

- Sugestões e melhorias são bem-vindas.
- Faça um fork do projeto, crie uma branch e envie um pull request.

## Atualizações Futuras

- **Autenticação de Usuários**: Adicionar login e controle de acesso.
- **Notificações**: Enviar notificações de reservas confirmadas ou canceladas.
- **Responsividade**: Melhorar o design para dispositivos móveis.

## Autor

Ednilson Gonçalves Gomes  
[GitHub](https://github.com/edgomes-ti)

---

Se você encontrar algum problema ou tiver dúvidas, sinta-se à vontade para abrir uma issue no repositório.
